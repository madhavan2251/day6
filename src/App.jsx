import React from "react";
import Team from "./Team";
import "./App.css"; // import CSS

function App() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Clara Wilson",
      role: "UI/UX Designer",
      photo: "https://randomuser.me/api/portraits/women/47.jpg",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "David Brown",
      role: "Project Manager",
      photo: "https://randomuser.me/api/portraits/men/48.jpg",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  ];

  return (
    <div className="app">
      <h1 className="title">🚀 Meet Our Team</h1>
      <Team members={teamMembers} />
    </div>
  );
}

export default App;
