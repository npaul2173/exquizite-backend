import mongoose from "mongoose";

export interface IEmployee {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
  email: string;
}

const employeeSchema = new mongoose.Schema<IEmployee>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const EmployeeModel = mongoose.model<IEmployee>(
  "Employee",
  employeeSchema
);
