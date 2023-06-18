import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">Food is Important part of Life</h1>
          <p className="primary-text">
             <ul>
                <li>Nutrition</li>
                <li>Growth and Development</li>
                <li>Immune System Support</li>
                <li>Economic Impact</li>
                <li>Enjoyment and Pleasure </li>
             </ul>
          </p>
          
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              {" "}
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
      </div>
      <div className="about-section-container">
        <div className="about-section-text-container">
          <h1 className="primary-heading">Nutrition</h1>
          <p className="primary-text">
          Food is vital for providing the necessary nutrients, vitamins, and minerals that our bodies need to function properly.
          </p>
          <p className="primary-text">
            adipisicing elit. Magni, ut culpa eaque voluptatum tempora sequi at
            fugiat numquam eligendi placeat?
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">Growth and Development</h1>
          <p className="primary-text">
          Proper nutrition is crucial for healthy growth and development, especially in children and adolescents.
          </p>
          <p className="primary-text">
            adipisicing elit. Magni, ut culpa eaque voluptatum tempora sequi at
            fugiat numquam eligendi placeat?
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="about-section-container">
        <div className="about-section-text-container">
          <h1 className="primary-heading">Immune System Support</h1>
          <p className="primary-text">
          A well-nourished body is better equipped to fight off infections and maintain a strong immune system.
          </p>
          <p className="primary-text">
            adipisicing elit. Magni, ut culpa eaque voluptatum tempora sequi at
            fugiat numquam eligendi placeat?
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">Economic Impact</h1>
          <p className="primary-text">
          The food industry has a significant impact on the economy, providing employment and driving economic growth through farming, production, distribution, and hospitality sectors.
          </p>
          <p className="primary-text">
            adipisicing elit. Magni, ut culpa eaque voluptatum tempora sequi at
            fugiat numquam eligendi placeat?
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="about-section-container">
        <div className="about-section-text-container">
          <h1 className="primary-heading">Enjoyment and Pleasure</h1>
          <p className="primary-text">
          Food brings joy, pleasure, and sensory satisfaction, making it an essential part of our lives.
          </p>
          
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
