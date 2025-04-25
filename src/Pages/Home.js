import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import OurServices from './OurServices'
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
   
        <HomeBanner/>
<OurServices/>
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
    <Work/>
<ClientReview />
<div>
<Separate
      title="Our Client"
      heading={"We’re going to\nbecame partners\nfor the long run.."}
      description="Our clients describe us as a product team which creates amazing output, by crafting top-notch user experience."
      awards={awardsList}
    />
  </div>
    </>
  )
}

export default Home