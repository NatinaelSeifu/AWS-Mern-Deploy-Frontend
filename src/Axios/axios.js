import axios from "axios"
const instance = axios.create({
  baseURL:
    "http://Mern-Deployment-Demo-Backend-env.eba-bndx2ebk.us-east-1.elasticbeanstalk.com/api",
})
export default instance