import axios from "axios";

export const Post = (url , params) =>
  axios.post(url, params);

export const Get = (url) =>
  axios.get(url);

export const Delete = (url) =>
  axios.delete(url);
