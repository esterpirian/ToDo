export interface IuserRegister {
    userName?: string;
    passwprd?: string;
    Id?: string;
    Account?: string;
    currency?:string;
}
export interface IUserLogin {
    userName?: string;
    passwprd?: string;
   
}
export interface IUserDetail
{
    user?:string
   currency?:string
   idNumber?:number
  account?:number
  }