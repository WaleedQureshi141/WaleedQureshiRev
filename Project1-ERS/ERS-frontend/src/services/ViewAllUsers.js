import axios from "axios";

const VIEW_ALL_USERS_URL = 'http://localhost:8080/user/users';

export const viewAllUsers = () => axios.get(VIEW_ALL_USERS_URL);