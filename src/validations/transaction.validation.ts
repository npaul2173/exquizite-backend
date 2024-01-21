import { requiredValidation } from "@/utils/library/validate";

const validation = [
  requiredValidation("supplierName", "Supplier Name"),
  requiredValidation("amount", "Amount"),
  requiredValidation("type", "Type"),
  requiredValidation("description", "Description"),
];

const updateValidation = [
  requiredValidation("transactionId", "Transaction ID"),
  requiredValidation("patch", "Patch"),
];

export {
  validation as createTransactionValidation,
  updateValidation as updateTransactionValidation,
};
