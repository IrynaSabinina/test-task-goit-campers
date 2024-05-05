import axios from "axios";

const BASE_URL = "https://66267f3b052332d5532312fe.mockapi.io/camper/advert";
const mockApi = axios.create({ baseURL: BASE_URL });

export const fetchCampers = () => {
  const data = mockApi.get("/");

  return data;
};

// getCamper(1);
