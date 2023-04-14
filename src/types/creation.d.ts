interface ICreation {
  id: string;
  name: string;
  description: string;
  category: ICategory;
  user: IUser;
  createdAt?: Date;
  updatedAt?: Date;
}
