import {
  CreateTransactionProps,
  UpdateTransactionProps,
} from "@/models/transaction/type";
import TransactionService from "@/service/transaction.service";
import { INext, IReq, IRes } from "@/utils/interfaces/express.interface";

class TransactionController {
  private transactionService: TransactionService;

  constructor() {
    this.transactionService = new TransactionService();
  }
  createTransaction = async (req: IReq, res: IRes, next: INext) => {
    try {
      const inputData = { ...req.body } as CreateTransactionProps;
      const response = await this.transactionService.saveOne(inputData);
      res.send(response);
    } catch (error) {
      next(`TRANSACTION ❌ Error => : ${error}`);
    }
  };

  updateTransaction = async (req: IReq, res: IRes, next: INext) => {
    try {
      const inputData = { ...req.body } as UpdateTransactionProps;
      const response = await this.transactionService.update(inputData);
      res.send(response);
    } catch (error) {
      next(`TRANSACTION ❌ Error => : ${error}`);
    }
  };

  listTransactions = async (req: IReq, res: IRes, next: INext) => {
    try {
      const response = await this.transactionService.findAll();
      res.send(response);
    } catch (error) {
      next(`TRANSACTION ❌ Error => : ${error}`);
    }
  };
}

export default TransactionController;
