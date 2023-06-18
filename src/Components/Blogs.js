import React from "react";
import PickMeals from "../Assets/download (1).jpg";
import ChooseMeals from "../Assets/download (2).jpg";
import DeliveryMeals from "../Assets/download (3).jpg";
import DeliveryMeal from "../Assets/download (4).jpg";
import DeliveryMea from "../Assets/images (2).jpg";
import DeliveryMe from "../Assets/image-173 (1).avif";

const Blogs = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "All About Food",
      text: "Unlock the secrets of delicious recipes and culinary inspiration in our food blog.",
    },
    {
      image: ChooseMeals,
      title: "Eat.Sleep.Repeat",
      text: "Savor the flavors and elevate your culinary game with our delectable food blog.",
    },
    {
      image: DeliveryMeals,
      title: "Munch",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, debitis?",
    },
    {
      image: DeliveryMeal,
      title: "Bon Appetite",
      text: "Dive into a delicious journey of food exploration through our captivating blog.",
    },
    {
      image: DeliveryMea,
      title: "Brunchies",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, debitis?",
    },
    {
      image: DeliveryMe,
      title: "Grill",
      text: "Feast your eyes and tantalize your taste buds with our mouthwatering food blog",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Blogs</p>
        <h1 className="primary-heading">Check These Amazing Blogs</h1>
        <p className="primary-text">
        Unlock a world of knowledge and inspiration with our handpicked blog list, featuring thought-provoking articles, expert advice, and captivating stories. Dive into a diverse collection of blogs that cater to your interests and fuel your curiosity.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
