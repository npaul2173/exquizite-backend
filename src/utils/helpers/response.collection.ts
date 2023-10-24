// This are read mate helper functions to create response objects

import { StatusCodes } from "http-status-codes";
import { JsonResponse } from "../interfaces/response.interface";

const getOKResponsive = (data?: any) => {
  const response = {
    status: true,
    statusCode: StatusCodes.OK,
    data,
  } as JsonResponse;
  return response;
};

export { getOKResponsive };
