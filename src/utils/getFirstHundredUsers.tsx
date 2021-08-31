import { getUsers } from "./getUsers";

export const getFirstHundredUsers = () =>
  Promise.all([getUsers(), getUsers(), getUsers(), getUsers(), getUsers()]);
