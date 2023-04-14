interface IRole {
  id: string;
  name: string;
  description: string;
  permissions: IPermission[];
  createdAt: Date;
  updatedAt: Date;
}
