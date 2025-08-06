import axios from 'axios';

const instance = axios.create({
  baseURL: `${BASE_URL}/api`, // ✅ correct base
  withCredentials: true, // optional if you use cookies
});

export default instance;
