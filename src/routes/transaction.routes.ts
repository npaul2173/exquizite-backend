import TransactionController from "@/controller/transaction.controller";
import { validateRequest } from "@/utils/library/validate";
import {
  createTransactionValidation,
  updateTransactionValidation,
} from "@/validations/transaction.validation";
import { Router } from "express";

class TransactionRoutes {
  public routes: Router;
  public baseRoute: string;
  private transactionController: TransactionController;
  constructor() {
    this.routes = Router();
    this.baseRoute = "/transaction";
    this.transactionController = new TransactionController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
    this.get();
  }

  get() {
    this.routes.get("/list", this.transactionController.listTransactions);
  }

  post() {
    this.routes.post(
      "/create",
      validateRequest(createTransactionValidation),
      this.transactionController.createTransaction
    );
    this.routes.post(
      "/update",
      validateRequest(updateTransactionValidation),
      this.transactionController.updateTransaction
    );
  }
}

export default TransactionRoutes;
