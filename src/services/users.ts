import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import { ErrorCode, ErrorType } from '../common/constants/errors';
import { createJwtToken } from '../common/utils/auth';
import { AppError } from '../common/utils/error-handler';
import User from '../database/models/user';

const ROLES = {
  ADMIN: '1',
  EDITOR: '2',
  REGULAR: '3'
};

class UserService {
  public register = async (params: SignupDto) => {
    const password = await bcrypt.hash(params.password, 10);

    const payload = {
      id: nanoid(),
      username: params.username,
      password,
      email: params.email,
      roleId: ROLES.ADMIN
    };
    const user = await User.query().insert(payload).returning('*');
    const token = createJwtToken({
      id: user.id,
      email: user.email
    });

    return { user, token };
  };

  public signin = async (params: SigninDto) => {
    const user = await User.query().where('email', params.email).first();
    if (!user) {
      throw new AppError(
        ErrorType.InvalidRequest,
        ErrorCode.CredentialsInvalid,
        'Email/Password do not match'
      );
    }
    const passwordValid = await bcrypt.compare(params.password, user.password);
    if (!passwordValid) {
      throw new AppError(
        ErrorType.InvalidRequest,
        ErrorCode.CredentialsInvalid,
        'Email/Password do not match'
      );
    }
    const token = createJwtToken({
      id: user.id,
      email: user.email
    });

    return { user, token };
  };
}

export default UserService;
