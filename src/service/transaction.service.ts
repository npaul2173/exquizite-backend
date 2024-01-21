import { TransactionModel } from "@/models/transaction";
import { UpdateTransactionProps } from "@/models/transaction/type";

class TransactionService {
  async saveOne(inputData: any) {
    try {
      return await TransactionModel.create(inputData);
    } catch (error) {
      throw new Error("Create Save service failed");
    }
  }

  async update(inputData: UpdateTransactionProps) {
    try {
      const { transactionId } = inputData;
      return await TransactionModel.findByIdAndUpdate(
        transactionId,
        inputData.patch,
        { new: true }
      );
    } catch (error) {
      throw new Error("Update service failed");
    }
  }

  async findAll() {
    try {
      return await TransactionModel.find();
    } catch (error) {
      throw new Error("Find service failed");
    }
  }
}

export default TransactionService;
