import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import BaseError from '../../exceptions/base-error';
import { loadConfig } from '../../config/config';

const config = loadConfig();

const createJwtToken = (param: CreateTokenDto) =>
  jwt.sign(param, config.jwtSecret);

const treatAuthToken = (token: string | undefined): IUser => {
  if (!token) {
    throw new BaseError(
      'No token specified',
      HttpStatus.UNAUTHORIZED,
      'No token specified',
      true
    );
  }
  if (token.indexOf('Bearer') !== -1) {
    token = token.slice(7);
  }
  return <IUser>jwt.verify(token, config.jwtSecret);
};

export { createJwtToken, treatAuthToken };
