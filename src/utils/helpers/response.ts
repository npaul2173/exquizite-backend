// This are read mate helper functions to create response objects

import { StatusCodes } from "http-status-codes";
import { JsonResponse } from "../interfaces/response.interface";
import { IRes } from "../interfaces/express.interface";

const getOKResponse = (res: IRes, data?: any, message?: string) => {
  const response = {
    status: true,
    statusCode: StatusCodes.OK,
    data,
    message,
  } as JsonResponse;
  return res.status(StatusCodes.ACCEPTED).send(response);
};

const getCreateResponse = (res: IRes, message?: string, data?: any) => {
  const response = {
    status: true,
    statusCode: StatusCodes.CREATED,
    data,
    message,
  } as JsonResponse;
  return res.status(StatusCodes.CREATED).send(response);
};

const getConflictResponse = (res: IRes, message?: string, data?: any) => {
  const response = {
    status: false,
    statusCode: StatusCodes.CONFLICT,
    data,
    message,
  } as JsonResponse;
  return res.status(StatusCodes.CONFLICT).send(response);
};

export { getCreateResponse, getOKResponse, getConflictResponse };
