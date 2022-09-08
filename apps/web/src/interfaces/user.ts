export interface IUserAddress {
  _id: string;
  name: string;
  company: string;
  country: string;
  street: string;
  city: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
  default: boolean;
}

type Role = "admin" | "customer";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: IUserAddress[];
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}