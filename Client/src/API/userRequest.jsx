import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
});

export const register = (formdata) => API.post("/api/v1/register", formdata);
export const getAllUsers = () => API.get("/api/v1/users");
export const deleteUserApi = (id) => API.delete(`/api/v1/user/${id}`);
export const editUser = (id) => API.get(`/api/v1/user/${id}`);
