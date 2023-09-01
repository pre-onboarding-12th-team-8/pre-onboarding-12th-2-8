import axios from "axios";
import { BASE_URL, TOKEN } from "./config";
export const API = axios.create({
  timeout: 5000,
  baseURL: `${BASE_URL}`,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

//git 커밋시 Token키가 유출될 상황을 고려하여 토큰의 유무 판단 - 없을시 60회 제한
API.interceptors.request.use(
  (config) => {
    if (TOKEN) {
      config.headers.Authorization = `token ${TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
