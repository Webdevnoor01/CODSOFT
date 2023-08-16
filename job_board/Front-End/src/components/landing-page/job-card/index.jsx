import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Button from "../../ui/button";

const JobCard = ({
  logo,
  title,
  jobType,
  companyName,
  location,
  shortDescription,
  categories,
}) => {
  return (
    <div className="main__job-card">
      <div className="main__job-card-heading">
        <div className="main__job-card-logo-container">
          <img className="main__job-card-logo" src={logo} alt="company logo" />
        </div>
        <button className="main__job-card-button"> {jobType}</button>
      </div>

      <div className="main__job-card-details">
        <div className="main__job-card-title">{title}</div>

        <div className="main__job-card-company">
          <span className="main__job-card-company-name">{companyName}</span>
          <span className="main__job-card-company-location">&nbsp;{location}</span>
        </div>

        <div className="main__job-card-description">{shortDescription.slice(0, 77)}...</div>
      </div>

      <div className="main__job-card-keywords">
        {categories.map((category) => (
          <div key={category} className={`main__job-card-keyword ${category.toLowerCase()}`}>{category}</div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
