import api from "../../services/api";

export const getVoteCount = async () => {
  const res = await api.get("/candidate/votes");
  return res.data;
};

export const getCandidateProfile = async () => {
    const res = await api.get("/candidate/profile");
    return res.data;
}

export const getVoteTrend = async () => {
  const res = await api.get("/candidate/trend");
  return res.data;
};