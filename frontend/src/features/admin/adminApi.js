import api from "../../services/api";

export const getAdminStats = async () => {
  const res = await api.get("/admin/stats");
  return res.data;
};

export const getLiveVotes = async () => {
  const res = await api.get("/admin/live-votes");
  return res.data;
};

export const addCandidate = async (data) => {
  const res = await api.post("/admin/candidates", data);
  return res.data;
};

export const deleteCandidate = async (id) => {
  return await api.delete(`/admin/candidates/${id}`);
  return res.data;
};