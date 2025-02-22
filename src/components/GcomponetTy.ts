import { ChangeEvent } from "react";

export interface GInputTy{
    labelname:string,
    handleChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    id:string,
    type:string
    value:string
    error?:string | null
}

export interface FormTy{
username:string;
email:string;
password:string;
confirmPassword:string
}

export interface LoginTy{
    username:string;
    password:string;

}