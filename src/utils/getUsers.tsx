import axios from "axios";

let currentPageValue = 1;

export const getUsers = () =>
  axios.get(`https://gorest.co.in/public-api/users?page=${currentPageValue++}`);
