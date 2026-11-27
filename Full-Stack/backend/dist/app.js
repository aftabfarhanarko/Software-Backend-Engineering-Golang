"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const node_crypto_1 = require("node:crypto");
const promises_1 = require("node:fs/promises");
const node_path_1 = __importDefault(require("node:path"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
const dataDirectory = node_path_1.default.join(process.cwd(), "data");
const dataFile = node_path_1.default.join(dataDirectory, "students.json");
let students = [];
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "10kb" }));
async function saveStudents() {
    await (0, promises_1.mkdir)(dataDirectory, { recursive: true });
    await (0, promises_1.writeFile)(dataFile, `${JSON.stringify(students, null, 2)}\n`, "utf8");
}
function validateStudent(body) {
    if (!body || typeof body !== "object" || Array.isArray(body))
        return { error: "Request body must be a JSON object" };
    const input = body;
    const fields = ["firstName", "lastName", "dateOfBirth", "gender", "email", "phone", "address"];
    for (const field of fields) {
        if (typeof input[field] !== "string" || !input[field].trim())
            return { error: `${field} is required` };
    }
    const value = Object.fromEntries(fields.map((field) => [field, input[field].trim()]));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email))
        return { error: "A valid email address is required" };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value.dateOfBirth) || Number.isNaN(Date.parse(value.dateOfBirth))) {
        return { error: "dateOfBirth must be a valid date in YYYY-MM-DD format" };
    }
    if (!["Male", "Female", "Other"].includes(value.gender))
        return { error: "gender must be Male, Female, or Other" };
    if (value.phone.length < 7)
        return { error: "phone must contain at least 7 characters" };
    return { value };
}
function findStudent(id) {
    return students.find((student) => student.id === id);
}
function getStudentId(req) {
    const id = req.params.id;
    return Array.isArray(id) ? id[0] : id;
}
app.get("/", (_req, res) => {
    res.json({ message: "Student Registration API", endpoints: ["GET /api/students", "GET /api/students/:id", "POST /api/students", "PUT /api/students/:id", "DELETE /api/students/:id"] });
});
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});
app.get("/api/students", (_req, res) => {
    res.json({ count: students.length, students });
});
app.get("/api/students/:id", (req, res) => {
    const student = findStudent(getStudentId(req));
    if (!student)
        return res.status(404).json({ error: "Student not found" });
    return res.json(student);
});
app.post("/api/students", async (req, res) => {
    const parsed = validateStudent(req.body);
    if (parsed.error)
        return res.status(400).json({ error: parsed.error });
    if (students.some((student) => student.email.toLowerCase() === parsed.value.email.toLowerCase())) {
        return res.status(409).json({ error: "A student with this email already exists" });
    }
    const now = new Date().toISOString();
    const student = { ...parsed.value, id: (0, node_crypto_1.randomUUID)(), createdAt: now, updatedAt: now };
    students.push(student);
    await saveStudents();
    return res.status(201).json(student);
});
app.put("/api/students/:id", async (req, res) => {
    const id = getStudentId(req);
    const index = students.findIndex((student) => student.id === id);
    if (index < 0)
        return res.status(404).json({ error: "Student not found" });
    const parsed = validateStudent(req.body);
    if (parsed.error)
        return res.status(400).json({ error: parsed.error });
    if (students.some((student) => student.id !== id && student.email.toLowerCase() === parsed.value.email.toLowerCase())) {
        return res.status(409).json({ error: "A student with this email already exists" });
    }
    const updated = { ...students[index], ...parsed.value, updatedAt: new Date().toISOString() };
    students[index] = updated;
    await saveStudents();
    return res.json(updated);
});
app.delete("/api/students/:id", async (req, res) => {
    const id = getStudentId(req);
    const index = students.findIndex((student) => student.id === id);
    if (index < 0)
        return res.status(404).json({ error: "Student not found" });
    const [deleted] = students.splice(index, 1);
    await saveStudents();
    return res.json({ message: "Student deleted", student: deleted });
});
app.use((error, _req, res, _next) => {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
});
async function start() {
    try {
        await (0, promises_1.mkdir)(dataDirectory, { recursive: true });
        try {
            students = JSON.parse(await (0, promises_1.readFile)(dataFile, "utf8"));
            if (!Array.isArray(students))
                throw new Error("Student data must be an array");
        }
        catch (error) {
            if (error.code !== "ENOENT")
                throw error;
            await saveStudents();
        }
        app.listen(port, () => console.log(`Student API listening at http://localhost:${port}`));
    }
    catch (error) {
        console.error("Could not load student data:", error);
        process.exitCode = 1;
    }
}
void start();
