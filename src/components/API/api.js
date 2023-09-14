import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('user')}`,  
    timeout: 1000,
  },
});

export { api };
