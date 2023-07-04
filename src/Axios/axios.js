import axios from "axios"
const instance = axios.create({
  baseURL: "http://ec2-54-210-52-70.compute-1.amazonaws.com:8000/api",
})
export default instance
//test  k