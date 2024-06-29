export type TUser = {
  name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  phone: string;
  address: string;
}
export type TAuth  = {
  email: string;
  password:string
}