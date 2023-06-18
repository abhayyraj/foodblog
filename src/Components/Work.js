import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'


const Work = () => {
  const workInfoData =  [
    {
      image: PickMeals,
      title: "Not Blatant Eating Advices",
      text: "We teach you to be responsible with what YOU eat",
    },
    {
      image: ChooseMeals,
      title: "Huge Range of Recipes",
      text: " My blog caters to diverse tastes and preferences, providing a wide range of recipes spanning various cuisines, dietary needs, and cooking skill levels. ",
    },
    {
      image: DeliveryMeals,
      title: "Unparalleled Expertise",
      text: "Backed by years of experience and knowledge in the culinary field, my blog offers in-depth insights, professional techniques, and tried-and-tested recipes that ensure exceptional results",
    },
  ]
    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <h1 className='primary-heading'>The Pluses</h1>
            <p className='primary-text'>
            Our blogs stand out from the rest with its unique blend of expertise, creativity, and passion.
            </p>
            <p className='primary-text'>Here's why they're better:</p>
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

export default Work