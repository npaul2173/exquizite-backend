import mongoose, { Schema, Types } from "mongoose";

interface IEmployee {
  name: string;
  email: string;
}

const employeeSchema = new Schema<IEmployee>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const EmployeeModel = mongoose.model<IEmployee>("User", employeeSchema);
