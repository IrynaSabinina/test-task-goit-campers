import axios from 'axios';

const BASE_URL = 'https://66267f3b052332d5532312fe.mockapi.io/camper/advert';
const mockApi = axios.create({ baseURL: BASE_URL });

export const fetchCampers = async () => {
  try {
    const data = mockApi.get('/');
    return data;
  } catch (error) {
    console.error('Error fetching adverts:', error);
    throw error;
  }
};
