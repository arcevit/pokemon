import axios, { AxiosError } from "axios";

export const getPaginatedAll = async () => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
    );
    return res.data as any;
  } catch (e) {
    const error = e as AxiosError;
    console.log(error.response?.status);
  }
};
