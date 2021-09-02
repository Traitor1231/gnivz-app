import { IMeta } from "./Meta";

export interface IResponseAxios<T> {
    code: number;
    data: T[];
    meta: IMeta;
  }