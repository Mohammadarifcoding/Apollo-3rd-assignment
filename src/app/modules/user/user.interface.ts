

export interface TUser {
  name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
  isDeleted:boolean 
}

export type TAuth  = {
  email: string;
  password:string
}