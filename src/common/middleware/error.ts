import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError, errorHandler } from '../../common/utils/error-handler';
import { ErrorCode, ErrorType } from '../../common/constants/errors';

function codeToHttpStatus(code: ErrorCode): number {
  switch (code) {
    case ErrorCode.UserAlreadyExists ||
      ErrorCode.VerificationCodeExpired ||
      ErrorCode.CredentialsInvalid ||
      ErrorCode.ParameterInvalid:
      return 400;
    case ErrorCode.ResourceMissing:
      return 404;
    case ErrorCode.UnauthorizedAction:
      return 401;
    default:
      return 500;
  }
}

export const handler = async (
  err: Error | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!errorHandler.isTrustedError(err)) {
    next(err);
  }

  await errorHandler.handleError(err);

  if (err instanceof ZodError) {
    res.status(404).send({
      error: {
        type: ErrorType.InvalidRequest,
        code: ErrorCode.ParameterInvalid,
        message: err.issues[0].message,
        param: err.issues[0].path.join('.')
      }
    });
  } else if (err instanceof AppError) {
    res.status(codeToHttpStatus(err.code)).send({
      error: {
        type: err.type,
        code: err.code,
        message: err.message
      }
    });
  } else {
    res.status(500).send({
      type: ErrorType.ApiError,
      code: ErrorCode.ParameterInvalid,
      message: 'Something went wrong'
    });
    return;
  }
};

export default handler;
