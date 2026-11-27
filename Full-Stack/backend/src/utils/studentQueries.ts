import type { QueryResultRow } from "pg";
import { query } from "./database.js";

export type Student = QueryResultRow & {
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

const studentColumns = `id, first_name AS "firstName", last_name AS "lastName",
  full_name AS "fullName", date_of_birth AS "dateOfBirth",
  gender, email, phone, address`;

export async function findStudentByEmail(email: string): Promise<Student | null> {
  const result = await query<Student>(
    `SELECT ${studentColumns} FROM students WHERE email = $1 LIMIT 1`,
    [email],
  );

  return result.rows[0] ?? null;
}

export async function getStudents(): Promise<Student[]> {
  const result = await query<Student>(
    `SELECT ${studentColumns} FROM students ORDER BY first_name, last_name`,
  );

  return result.rows;
}

export async function insertStudent(student: Student): Promise<Student> {
  const result = await query<Student>(
    `INSERT INTO students
      (id, first_name, last_name, full_name, date_of_birth, gender, email, phone, address)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING ${studentColumns}`,
    [
      student.id,
      student.firstName,
      student.lastName,
      student.fullName,
      student.dateOfBirth,
      student.gender,
      student.email,
      student.phone,
      student.address,
    ],
  );

  return result.rows[0];
}
