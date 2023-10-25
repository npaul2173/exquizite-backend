// This are read mate helper functions to create response objects

import { StatusCodes } from "http-status-codes";
import { JsonResponse } from "../interfaces/response.interface";

const getOKResponse = (data?: any, message?: string) => {
  const response = {
    status: true,
    statusCode: StatusCodes.OK,
    data,
    message,
  } as JsonResponse;
  return response;
};

const getCreateResponse = (message?: string, data?: any) => {
  const response = {
    status: true,
    statusCode: StatusCodes.CREATED,
    data,
    message,
  } as JsonResponse;
  return response;
};

const getConflictResponse = (message?: string, data?: any) => {
  const response = {
    status: false,
    statusCode: StatusCodes.CONFLICT,
    data,
    message,
  } as JsonResponse;
  return response;
};

export { getCreateResponse, getOKResponse, getConflictResponse };
