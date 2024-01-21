import mongoose from "mongoose";
import { ITransaction } from "./type";

const schema = new mongoose.Schema<ITransaction>(
  {
    supplierName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const TransactionModel = mongoose.model<ITransaction>(
  "Transaction",
  schema
);
