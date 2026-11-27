import cors from "cors";
import express, { Request, Response } from "express";
import { connectToPostgres } from "./utils/database.js";
import {
  findStudentByEmail,
  getStudents,
  insertStudent,
  type Student,
} from "./utils/studentQueries.js";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());



const successResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data?: unknown,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res: Response, statusCode: number, message: string) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

app.get("/api/getUnvi", async (_req: Request, res: Response) => {
  try {
    const students = await getStudents();
    return successResponse(
      res,
      200,
      "Students retrieved successfully",
      students,
    );
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    return errorResponse(res, 500, "Failed to retrieve students");
  }
});

app.post("/api/students", async (req: Request, res: Response) => {
  const { firstName, lastName, dateOfBirth, gender, email, phone, address } =
    req.body;

  // Input Validation

  if (
    !firstName ||
    !lastName ||
    !dateOfBirth ||
    !gender ||
    !email ||
    !phone ||
    !address
  ) {
    return errorResponse(res, 400, "All fields are required");
  }

  // Validate Gender

  if (!["Male", "Female", "Other"].includes(gender)) {
    return errorResponse(res, 400, "Invalid gender value");
  }

  // Check Duplicate Email

  const existingStudent = await findStudentByEmail(email);

  if (existingStudent) {
    return errorResponse(res, 409, "Email already exists");
  }

  // Create Student

  const newStudent: Student = {
    id: Date.now().toString(),
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    dateOfBirth,
    gender,
    email,
    phone,
    address,
  };

  // Save student and return the row written by PostgreSQL.
  const savedStudent = await insertStudent(newStudent);

  return successResponse(
    res,
    201,
    "Student created successfully",
    savedStudent,
  );
});



async function startServer(): Promise<void> {
  try {
    await connectToPostgres();

    app.listen(PORT, () => {
      console.log("\x1b[36m%s\x1b[0m", "🚀 Student API Server");
      console.log("\x1b[32m%s\x1b[0m", `✓ Server: http://localhost:${PORT}`);
      console.log("\x1b[32m%s\x1b[0m", "✓ Status: Running");
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
}

void startServer();
