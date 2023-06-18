import React from "react";
import PickMeals from '../Assets/download.jpg'
import ChooseMeals from '../Assets/images.jpg'
import DeliveryMeals from '../Assets/images (1).jpg'

const News = () => {
    const workInfoData =  [
      {
        image: PickMeals,
        title: "All About Food",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, debitis?",
      },
      {
        image: ChooseMeals,
        title: "Food Wastage",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, debitis?",
      },
      {
        image: DeliveryMeals,
        title: "Surveys",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, debitis?",
      },
    ]
      return (
      <div className='work-section-wrapper'>
          <div className='work-section-top'>
              <p className='primary-subheading'>News</p>
              <h1 className='primary-heading'>Happening Today</h1>
              <p className='primary-text'>
              Stay informed and up-to-date with our dynamic news section. Explore a diverse range of topics, including current events, world news, technology breakthroughs, scientific discoveries, entertainment updates, and more. Our concise and engaging articles deliver the latest headlines and insights, keeping you connected to the ever-changing world around you. From thought-provoking analysis to fascinating stories, dive into our news section for a dose of knowledge, awareness, and a broader perspective on the world.
              </p>
          </div>
          <div className='work-section-bottom'>
              {workInfoData.map((data) => (
                  <div className='work-section-info'>
                      <div className='info-boxes-img-container'>
                          <img src={data.image} alt='' />
                      </div>
                      <h2>{data.title}</h2>
                      <p>{data.text}</p>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default News;
