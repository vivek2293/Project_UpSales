import axios from "axios";
import authHeader from "./auth-header";
import url from "../global_var";

const API_URL = url + "/posts";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = async() => {
  return await axios.get(url + "/private", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;
