import axios from 'axios';

const BASE_URL = 'https://63fcb8b78ef914c5559de1b9.mockapi.io/api/v1/';

export const fetchContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}contacts`);

  return data;
};

export const addPhoneContacts = async contact => {
  const { data } = await axios.post(`${BASE_URL}contacts/${contact}`);

  return data;
};

export const deletePhoneContacts = async id => {
  const { data } = await axios.delete(`${BASE_URL}contacts/${id}`);

  return data;
};
