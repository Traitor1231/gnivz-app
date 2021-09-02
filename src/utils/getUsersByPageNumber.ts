import axios from "axios";
import { IResponseAxios } from "../interfaces/ResponseAxios";
import {  IUser } from "../interfaces/User";

export const getUsersByPageNumber = (currentPageValue: number) => 
  axios.get<IResponseAxios<IUser>>(`https://gorest.co.in/public-api/users?page=${currentPageValue}`)