export type ITransaction = {
  amount: number;
  type: string;
  supplierName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

type CreateTransactionProps = Omit<ITransaction, "createdAt" | "updatedAt">;
type UpdateTransactionProps = {
  transactionId: string;
  patch: CreateTransactionProps;
};

export { CreateTransactionProps, UpdateTransactionProps };
