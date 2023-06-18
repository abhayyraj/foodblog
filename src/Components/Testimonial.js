import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic1 from "../Assets/3.jpg";
import ProfilePic2 from "../Assets/30.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Read what our readers have to say about their experiences with our food blog. From mouthwatering recipes to informative articles, our testimonials showcase how our content has delighted taste buds, expanded culinary knowledge, and inspired healthier eating habits. Discover the impact our food blog has had on the lives of food enthusiasts, home cooks, and health-conscious individuals. Join the growing community of satisfied readers who have found joy, inspiration, and deliciousness within our virtual pages.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} className="pfp" alt="" />
        <h2>John Doe</h2>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>
        I absolutely love this food blog! The recipes are incredibly delicious, easy to follow, and always turn out perfectly. It has become my go-to source for culinary inspiration.
        </p>
        
        
        <img src={ProfilePic1} className="pfp" alt="" />
        <h2>Daisy</h2>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          
        </div>
        <p>
        I'm a food enthusiast and this blog has become my ultimate guide. The restaurant reviews, cooking tips, and culinary travel stories transport me to a world of flavors and culinary adventures. It's a must-read for any food lover!
        </p>
        
       
        <img src={ProfilePic2} className="pfp" alt="" />
        <h2>David</h2>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>
        As a busy mom, this food blog has been a lifesaver. The quick and healthy recipe ideas have made meal planning so much easier. My family loves the dishes, and I feel confident knowing that I'm providing nutritious meals for them.
        </p>
        
        
      </div>
    </div>
  );
};

export default Testimonial;