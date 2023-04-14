import { logger } from './logger';
import BaseError from '../../exceptions/base-error';
import { ErrorCode, ErrorType } from '../constants/errors';

class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.error(
      'Error message from the centralized error-handling component',
      err
    );
  }

  public isTrustedError(error: Error) {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  }
}
export const errorHandler = new ErrorHandler();

export class AppError extends Error {
  constructor(
    public type: ErrorType,
    public code: ErrorCode,
    message?: string
  ) {
    super(message);
  }
}
