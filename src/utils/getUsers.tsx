import axios from "axios";

export const getUsers = (currentPageValue: number) => 
  axios.get(`https://gorest.co.in/public-api/users?page=${currentPageValue}`);
