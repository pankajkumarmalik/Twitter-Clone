const BASE_URL = "https://twitter-clone-project-vdab.onrender.com";

export const getApiUrl = (endpoint) => {
  return `${BASE_URL}/${endpoint}`;
};
