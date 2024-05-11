const BASE_URL = "https://twitter-clone-deploy.onrender.com";

export const getApiUrl = (endpoint) => {
  return `${BASE_URL}/${endpoint}`;
};
