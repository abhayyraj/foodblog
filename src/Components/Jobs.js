import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic1 from "../Assets/3.jpg";
import ProfilePic2 from "../Assets/30.jpg";
import { AiFillStar } from "react-icons/ai";

const Jobs = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Jobs</p>
        <h1 className="primary-heading">Opportunities</h1>
        <p className="primary-text">
       Looking for new career opportunities? You're in the right place. Our Job Section is designed to connect job seekers like you with a wide range of employment opportunities.
       Here's what you can expect from our Job Section:
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <p className="primary-text">
             <ul>
                <li>Job Listings</li>
                <li>Advance Search</li>
                <li>Resume Upload</li>
                <li>Application Management</li>
                <li>Job Alerts</li>
             </ul>
          </p>
      </div>
      <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Jobs;