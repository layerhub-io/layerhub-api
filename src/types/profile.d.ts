interface IProfile {
  id: string;
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  createdAt?: Date;
  updatedAt?: Date;
}
