# 🗳️ Election Poll System  

A **full-stack web application** that allows secure online elections with **role-based access control**. Built with **React (frontend)** and **Node.js/Express + MongoDB (backend)**.  

## 🌐 Deployment  
- **Backend deployed on:** [https://election-poll-2gdn.onrender.com/](https://election-poll-2gdn.onrender.com/)  
- **Frontend deployed on:** [https://election-poll-eight.vercel.app/](https://election-poll-eight.vercel.app/)  
- Connected via **CORS** and environment variables.  

---

## 🚀 Features  

### 👤 Authentication & Roles  
- **JWT authentication** for secure login/register.  
- Roles supported:  
  - **Admin** → Manage candidates and view overall results.  
  - **Candidate** → View own vote count in real-time.  
  - **Voter** → Cast vote (only once).  

---

### 🗳️ Voting System  
- Voters can cast a **single vote** securely.  
- Candidates are listed dynamically from the backend.  
- Duplicate voting is prevented.  
- Confirmation after voting: *“Thank you for voting!”*.  

---

### 📊 Results & Statistics  
- **Candidate** → Can view their own votes.  
- **Admin** → Can view vote counts of all candidates.  
- **Voter** → Sees confirmation after vote is cast.  

---

### 🌐 Frontend (React + HTML/CSS/JS)  
- **Login & Register Pages** for different roles.  
- **Voting Dashboard** → Candidate list fetched via API.  
- **Result Page** → Displays votes (role-based).  
- Clean, responsive UI built with React.  

---

### 🔧 Backend (Node.js, Express, MongoDB)  
- REST APIs for authentication, voting, and results.  
- Secure password hashing (bcrypt).  
- Role-based access middleware.  
- MongoDB Atlas for data persistence.  

---

### 🔒 Security  
- Passwords hashed before storage.  
- JWT-based route protection.  
- CORS enabled for frontend-backend communication.  

---

## 🏗️ Tech Stack  
- **Frontend:** React, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Auth:** JWT, bcrypt  
- **Deployment:** Render (Backend), Vercel/Netlify (Frontend)  

---

## 🔮 Future Plans
- Add real-time vote count updates using WebSockets.  
- Enable multiple elections/events support.  
- Implement JWT refresh tokens for better authentication security.  
- Create an admin dashboard with analytics and candidate management.  
- Add email notifications for voters after successful voting.  
- Enhance UI/UX with animations and accessibility improvements.    
- Admin panel for managing candidates through UI.  
- Enhanced analytics and visualizations.  
