import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://mialiulo.onrender.com/api',
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
  },
});
export const signup = (body) => API.post('/auth/signup', body);
export const validateToken = () => {
  return API.get('/auth/validateToken');
};

export const uploadImg = (file) => {
  const formData = new FormData();
  formData.append('myFile', file);
  return API.post('/post/upload', formData);
};

export const createPost = (body) => {
  return API.post('/post/create', body);
};

export const getPost = () => {
  return API.get('/post/getpost');
};
export const getPostById = (id) => {
  return API.get(`/post/${id}`);
};
