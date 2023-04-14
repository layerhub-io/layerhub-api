import process from 'process';
import { errorHandler } from './error-handler';

// get the unhandled rejection and throw it to another fallback handler we already have.
process.on('unhandledRejection', (reason: Error) => {
  console.log('unhandledRejection ERROR');
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});

process.on('SIGINT', function onSigint() {
  process.exit();
});

process.on('SIGTERM', function onSigterm() {
  process.exit();
});
