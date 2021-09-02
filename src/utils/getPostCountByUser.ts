import axios from "axios";
import { IResponseAxios } from "../interfaces/ResponseAxios";
import { IUserInfo } from "../interfaces/UserInfo";

export const getPostCountByUser = (id: number) =>
  axios.get<IResponseAxios<IUserInfo>>(`https://gorest.co.in/public-api/posts?user_id=${id}`);
