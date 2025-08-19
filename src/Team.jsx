import React from "react";
import TeamCard from "./TeamCard";

function Team({ members }) {
  return (
    <div className="team-grid">
      {members.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  );
}

export default Team;
