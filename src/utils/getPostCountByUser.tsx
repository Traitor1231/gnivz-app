import axios from "axios";

export const getPostCountByUser = (id: number) =>
  axios.get(`https://gorest.co.in/public-api/posts?user_id=${id}`);
