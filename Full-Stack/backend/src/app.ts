import cors from "cors";
import express, { Request, Response } from "express";

type Student = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  email: string;
  phone: string;
  address: string;
};

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Student data
const students: Student[] = [];

// GET - All Students
app.get("/api/students", (req: Request, res: Response) => {
  res.json({
    count: students.length,
    students,
  });
});

// GET - Student by ID
app.get("/api/students/:id", (req: Request, res: Response) => {
  const student = students.find((item) => item.id === req.params.id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.json(student);
});

// POST - Create Student
app.post("/api/students", (req: Request, res: Response) => {
  const { firstName, lastName, dateOfBirth, gender, email, phone, address } =
    req.body;

  console.log(req.body);

  // Create new student
  const student: Student = {
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

  // Save student Data in Database
  students.push(student);

  res.status(201).json({
    message: "Student created successfully",
    student,
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
