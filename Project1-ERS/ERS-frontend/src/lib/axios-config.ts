import axios from "axios";

export const authInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_API_AUTH,
        headers:
        {
            "Content-Type": "application/json",
        }
    }
);

export const userAdminInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_API_USER_ADMIN,
        withCredentials: true,
        headers:
        {
            "Content-Type": "application/json"
        }
    }
);

export const reimbInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_API_REIMB,
        // withCredentials: true,
        // headers:
        // {
        //     "Content-Type": "application/json",
        // }
    }
);

export const reimbAdminInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_API_REIMB_ADMIN,
        withCredentials: true,
        headers:
        {
            "Content-Type": "application/json",
        }
    }
);