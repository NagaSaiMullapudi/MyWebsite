import React from "react";
import "../styles/Home.css";

function EducationCard({ year, degree, institution, grade }) {
  return (
    <div className="educationCard">
      <h3>{year}</h3>
      <p className="degree">{degree}</p>
      <p className="institution">{institution}</p>
      <p className="grade">Grade : {grade}</p>
    </div>
  );
}

export default EducationCard;
