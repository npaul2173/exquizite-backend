// This are read mate helper functions to create response objects

import { StatusCodes } from "http-status-codes";
import { JsonResponse } from "../interfaces/response.interface";
import { IRes } from "../interfaces/express.interface";
import Logging from "../library/logging";

const getOKResponse = (res: IRes, data?: any, message?: string) => {
  const response = {
    status: true,
    statusCode: StatusCodes.OK,
    data,
    message,
  } as JsonResponse;
  return res.status(StatusCodes.OK).send(response);
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

const getUnauthorizedResponse = (res: IRes, message?: string, data?: any) => {
  const response = {
    status: false,
    statusCode: StatusCodes.UNAUTHORIZED,
    data,
    message,
  } as JsonResponse;
  return res.status(StatusCodes.UNAUTHORIZED).send(response);
};

const getInternalServerErrorResponse = (
  res: IRes,
  error: unknown,
  message: string = "Internal Server Error"
) => {
  const response = {
    status: false,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message,
  } as JsonResponse;
  Logging.error("❌ Error: Could not update quiz", error);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(response);
};

const getNotFoundResponse = (res: IRes, message?: string, data?: any) => {
  const response = {
    status: false,
    statusCode: StatusCodes.NOT_FOUND,
    data,
    message,
  } as JsonResponse;
  return res.status(StatusCodes.NOT_FOUND).send(response);
};

export {
  getCreateResponse,
  getOKResponse,
  getConflictResponse,
  getUnauthorizedResponse,
  getInternalServerErrorResponse,
  getNotFoundResponse,
};
