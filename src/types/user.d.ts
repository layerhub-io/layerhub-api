interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  role?: IRole;
  roleId: string;
  createdAt?: string;
  updatedAt?: string;
}

interface SignupDto {
  username: string;
  email: string;
  password: string;
}

interface SigninDto {
  email: string;
  password: string;
}

interface CreateTokenDto {
  id: string;
  email: string;
}
