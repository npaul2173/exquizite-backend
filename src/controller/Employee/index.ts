import { CreateEmployeeProps } from "@/models/Employee/interface";
import EmployeeService from "@/service/employee.service";
import { INext, IReq, IRes } from "@/utils/interfaces/express.interface";

class EmployeeController {
  private employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  public createEmployee = async (req: IReq, res: IRes) => {
    const {} = { ...req.body } as CreateEmployeeProps;
    const response = await this.employeeService.create(req.body);
    res.send(response);

    try {
    } catch (error) {
      throw new Error("❌ Error: Could not create employee");
    }
  };
}

export default EmployeeController;
