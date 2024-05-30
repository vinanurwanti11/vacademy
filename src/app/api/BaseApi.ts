import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { getAuth } from '../helpers/AuthHelpers'

type SsuAPIParams = {
  cookie?: string;
};

let API: AxiosInstance;

export const authKey = process.env.REACT_APP_AUTH_KEY;

const setupAPIClient = () => {
  API = axios.create({
    baseURL: "https://v-academy-b5759-default-rtdb.firebaseio.com/",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

  API.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError) => {
      if (!error.response) {
        return;
      } else {
        return Promise.reject(error);
      }
    },
  );
};

export const initialize = (
  params?: SsuAPIParams,
  anonymous?: boolean,
): AxiosInstance => {
  // always create new axios instance when cookie changed
  if (params?.cookie || !API || anonymous) {
    setupAPIClient();
  }

  // TODO: add token on interceptor
  const JSONProfile = getAuth()
  if (JSONProfile?.uid) {
    API.interceptors.request.use((config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
      };
      config.headers['Authorization'] = `Bearer ${JSONProfile.uid}`;
      return config;
    });
  }

  return API;
};

export default initialize;
