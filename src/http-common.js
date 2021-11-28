import axios from "axios";
const token = localStorage.getItem('token')

let isHeaders = {}

if (token) {
    isHeaders = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }
} else {
    isHeaders = {
        Accept: 'application/json',
    }
}

export default axios.create({
    baseURL: "https://api.baseplate.appetiserdev.tech/api/v1/auth",
    headers: isHeaders
  });
