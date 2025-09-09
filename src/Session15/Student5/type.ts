// src/types/student.ts

export type StudentStatus = "Đang hoạt động" | "Ngừng hoạt động";

export interface Student {
  stt: number;
  studentId: string;
  name: string;
  dob: string; // Date of birth
  email: string;
  status: StudentStatus;
}
