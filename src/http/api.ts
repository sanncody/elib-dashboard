import useTokenStore from '@/store/tokenstore';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    const token = useTokenStore.getState().token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const login = async (data: { email: string, password: string }) => api.post('/api/users/login', data);

export const register = async (data: { name: string, email: string, password: string }) => api.post("/api/users/register", data);

export const getBooks = async () => api.get("/api/books");

export const createBook = async (data: FormData) => api.post("/api/books/create", data, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
});

export const deleteBook = async (bookId: string) => api.post(`/api/books/${bookId}`);