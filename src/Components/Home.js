import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Blogs
          </h1>
          <p className="primary-text">
          Embark on a delectable journey through our food blog, where delicious recipes, foodie tips, and epicurean stories await. Let your culinary curiosity take the lead!
          </p>
          <button className="secondary-button">
            Dive In! <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container" >
          <img src={BannerImage} alt="" />
        </div>




      </div>
    </div>
  );
};

export default Home;
