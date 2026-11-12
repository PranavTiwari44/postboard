import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const getPosts = () => api.get("/posts");

const deletePost = (postId) => api.delete(`/posts/${postId}`);

const createPost = (postData) => api.post("/posts", postData);

const updatePost = (postId, postData) => api.put(`/posts/${postId}`, postData);

export { getPosts , deletePost, createPost, updatePost };