import mongoose, { Schema, Types } from "mongoose";

interface IEmployee {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
}

const employeeSchema = new mongoose.Schema<IEmployee>({
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
});

const Employee = mongoose.model<IEmployee>("Employee", employeeSchema);
