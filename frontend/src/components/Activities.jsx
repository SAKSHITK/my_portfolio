import React from "react";

const activities = [
  {
    title: "Data Science Club",
    role: "Member",
    description:
      "Active member of the Data Science Club, learning emerging data-science concepts and tools beyond coursework.",
    link: "#", 
  },
  {
    title: "NSS Volunteer",
    role: "Volunteer",
    description:
      "Engaged in community service activities including environmental awareness drives and social initiatives.",
    link: "#",
  },
  {
    title: "Hackathon",
    role: "Participant",
    description:
      "Took part in inter-college hackathons, building innovative solutions using AI and web technologies.",
    link: "#",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="activities-section" style={{paddingTop:"40px", minHeight:"8rem",}} >
      <h2 className="section-title">ExtraCurricular Activities</h2>
      <div className="activities-grid">
        {activities.map((act, index) => (
          <a
            href={act.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="activity-card"
          >
            <h3>{act.title}</h3>
            <p className="activity-role">{act.role}</p>
            <p className="activity-desc">{act.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Activities;
