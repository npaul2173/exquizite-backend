import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    errors,
  });
};

const requiredValidation = (column: string, name: string) => {
  return body(column).exists().withMessage(`${name} is required`);
};

const requiredObjectValidation = (column: string, name: string) => {
  return requiredValidation(column, name)
    .custom((value) => {
      return Object.keys(value).length !== 0;
    })
    .withMessage(`${name} is an empty object`);
};

export { requiredValidation, validateBody, requiredObjectValidation };
