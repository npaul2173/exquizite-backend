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
  return res.status(StatusCodes.CONFLICT).send(response);
};

const getInternalServerErrorResponse = (
  res: IRes,
  message?: string,
  data?: any
) => {
  const response = {
    status: false,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    data,
    message,
  } as JsonResponse;
  return res.status(StatusCodes.CONFLICT).send(response);
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
