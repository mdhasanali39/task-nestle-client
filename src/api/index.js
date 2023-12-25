import axios from "axios"
export const axiosPublic = axios.create({
    baseURL:'https://task-nestle-server-side.vercel.app/task-nestle'
})