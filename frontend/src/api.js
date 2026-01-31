// const API_URL = import.meta.env.MODE === "production" ? "https://election-poll-2gdn.onrender.com" : "http://localhost:3000"; 

// export default API_URL;


// export const registerUser = async (userData) => {
//   const res = await fetch(`${API_URL}/api/auth/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(userData),
//   });
//   return res.json();
// };


// export const loginUser = async (credentials) => {
//   const res = await fetch(`${API_URL}/api/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(credentials),
//   });
//   return res.json();
// };


// export const getCandidates = async (token) => {
//   const res = await fetch(`${API_URL}/api/voter/candidates`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.json();
// };


// export const castVote = async (token, candidateId) => {
//   const res = await fetch(`${API_URL}/api/voter/vote/${candidateId}`, {
//     method: "POST",
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.json();
// };


// export const getVoteCount = async (token) => {
//   const res = await fetch(`${API_URL}/api/admin/votes`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.json();
// };
