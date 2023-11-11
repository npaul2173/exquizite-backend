import { EmployeeModel } from "@/models/employee";
import { CreateEmployeeProps } from "@/models/employee/type";
import EmployeeService from "@/service/employee.service";
import { INext, IReq, IRes } from "@/utils/interfaces/express.interface";
import { QueryParams } from "@/utils/interfaces/query.interface";

class EmployeeController {
  private employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  createEmployee = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as CreateEmployeeProps;
    const response = await this.employeeService.create(inputData);
    res.send(response);

    try {
    } catch (error) {
      throw new Error("❌ Error: Could not create employee");
    }
  };

  listEmployee = async (req: IReq, res: IRes) => {
    const queryParams = { ...req.query } as QueryParams;
    const limit = queryParams.limit ? parseInt(queryParams.limit) : 10;
    const cursor = req.query.cursor;

    const data = await EmployeeModel.find().sort({ _id: 1 }).limit(limit);
    const nextCursor = data[data.length - 1]._id;

    res.json({ records: data.length, nextCursor, data });
  };
}

export default EmployeeController;
