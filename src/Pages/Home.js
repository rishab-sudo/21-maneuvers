import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './Home.css';
import HomeBanner from '../Components/HomeBanner'
import HomeServices from './HomeServices'
import ClientReview from './ClientReview'
import Separate from "../Components/Separate"
import Work from './OurWork'
import FAQ from './FAQ';
import faqImage from '../assets/slide21.jpg';


const awardsList = [
  { img: require("../assets/award_21.png"), imgTitle: "5x Developer Award" },
  { img: require("../assets/award_21.png"), imgTitle: "Best UI/UX 2023" },
  { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
  { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
  { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
]
const faqData = [
  {
    question: "Cost-effective offshore delivery of design, development, testing and support services",
    answer: "Offshore development and test services enable businesses to reduce costs and speed up innovation cycles..."
  },
  {
    question: "One stop shop for product development, maintenance, and support",
    answer: "Having the right team can streamline business processes, boost efficiency..."
  },
  {
    question: "One stop shop for product development, maintenance, and support",
    answer: "Having the right team can streamline business processes, boost efficiency..."
  },
  {
    question: "One stop shop for product development, maintenance, and support",
    answer: "Having the right team can streamline business processes, boost efficiency..."
  },

];
const Home = () => {
    return (
    <>
    <HomeBanner />
      <HomeServices />
      <div className=''>
        <FAQ
          faqs={faqData}
          heading="We work in the fields of  art direction."
          image={faqImage}
          imagePosition="right"
        />
      </div>
      {/* <Separate
      title="Awards & Honors"
      heading={"The awards\nwon by our\nproject."}
      description="Our clients describe us as a product team which creates amazing output, by crafting top-notch user experience."
      awards={awardsList}
    /> */}
      <Work />
      <ClientReview />
      <div>
        <Separate
          title="Our Client"
          heading={"We’re going to\nbecame partners\nfor the long run.."}
          description="Our clients describe us as a product team which creates amazing output, by crafting top-notch user experience."
          awards={awardsList}
        />
      </div>
      {/* <div className="popup-overlay">
      <div className="popup-form">
        <h2>Get in Touch</h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="form-step">
              <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Marketing">Marketing</option>
                <option value="SEO">SEO</option>
              </select>
              <select name="budget" value={formData.budget} onChange={handleChange} required>
                <option value="">Select Budget</option>
                <option value="Below $500">$500 or less</option>
                <option value="$500-$2000">$500 - $2000</option>
                <option value="Above $2000">Above $2000</option>
              </select>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
              <button type="submit">Send</button>
            </div>
          )}
        </form>
      </div>
    </div> */}


    </>
  )
}

export default Home