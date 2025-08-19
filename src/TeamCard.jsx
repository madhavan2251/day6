import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css"; // use same CSS

function TeamCard({ name, role, photo, linkedin, github }) {
  return (
    <div className="team-card">
      <img src={photo} alt={name} className="profile-img" />
      <h2 className="member-name">{name}</h2>
      <p className="member-role">{role}</p>
      <div className="divider"></div>
      <div className="social-links">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub className="icon github" />
        </a>
      </div>
    </div>
  );
}

export default TeamCard;
