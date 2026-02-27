import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getVoterCandidates = (config) => {
  return axios.get(`${API_URL}/voter/candidates`, config);
};

export const getVoterStats = (config) => {
  return axios.get(`${API_URL}/voter/stats`, config);
};

export const submitVote = (id, config) => {
  return axios.post(`${API_URL}/voter/vote/${id}`, {}, config);
};