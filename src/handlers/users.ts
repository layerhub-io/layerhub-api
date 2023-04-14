import UsersService from '../services/users';
import { Request, Response, NextFunction } from 'express';
import { SIGNIN_REQUEST, SIGNUP_REQUEST } from '../common/utils/schemas';

class UsersHandler {
  constructor(private usersService: UsersService) {}

  public async signup(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const input = SIGNUP_REQUEST.parse(request.body);
      const data = await this.usersService.register(input);
      response.json(data);
    } catch (err) {
      next(err);
    }
  }

  public async signin(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const input = SIGNIN_REQUEST.parse(request.body);
      const data = await this.usersService.signin(input);

      response.json(data);
    } catch (err) {
      next(err);
    }
  }

  public verify() {
    console.log('HI');
  }
}

export default UsersHandler;
