import React from 'react';
// import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';
import HomeBanner from '../Components/HomeBanner'
import ClientReview from './ClientReview'
import Separate from "../Components/SeparateOurClient"
import Work from './OurWork'
import FAQ from './FAQ';
import faqImage from '../assets/slide21.jpg';
import LetsTalk from "../Components/LetsTalk"

const images = [
  require('../assets/slide21.jpg'),
  require('../assets/slide21.jpg'),
  require('../assets/slide21.jpg'),
];

const awardsList = [
  { img: require("../assets/award_21.png"), imgTitle: "5x Developer Award" },
  { img: require("../assets/award_21.png"), imgTitle: "Best UI/UX 2023" },
  { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
  { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
  { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
]
const faqData = [
  {
    question: "Custom-built websites that drive results",
    answer: " High-performance, scalable websites crafted with clean code, intuitive UX, and your  business goals in mind."
  },
  {
    question: "Marketing strategies that make an impact",
    answer: " From Social Media to SEO, PPC, and Meta Ads, creative meets conversion in every campaign we run."
  },
  {
    question: "Design that defines your identity",
    answer: "  Powerful visual branding, from logos to complete brand systems, that connects with your audience at every touchpoint."
  },
  {
    question: "Visual storytelling that connect and convert",
    answer: "From compelling brand videos to professional product shoots, we capture your story with style, clarity, and impact"
  },

];
const Home = () => {
    return (
    <>
    <HomeBanner />
    {/* Home-service-section */}
       <Container fluid className='service-container-fluid'>
           <Container className='service-content-container'>
   
             <div className='service-left-section'>
               <Swiper
                 modules={[Navigation, Pagination, Autoplay]}
                 navigation={{
                   nextEl: '.custom-swiper-button-next',
                   prevEl: '.custom-swiper-button-prev',
                 }}
                 pagination={{ clickable: true }}
                 loop={true}
                 autoplay={{
                   delay: 3000,
                   disableOnInteraction: false,
                 }}
                 className='service-image-swiper'
               >
                 {images.map((img, index) => (
                   <SwiperSlide key={index}>
                     <img src={img} alt={`service-${index}`} className="service-swiper-image" />
                   </SwiperSlide>
                 ))}
   
                 {/* Custom Navigation Buttons */}
                 <div className="custom-swiper-button-prev">←</div>
                 <div className="custom-swiper-button-next">→</div>
               </Swiper>
             </div>
   
             <div className='service-right-section'>
               <div className='service-heading-box'>
                 <p className='page_text'>OUR SERVICES</p>
                 <p className='page_main_heading'>Complete Digital  <br />
                  Growth Solutions &<br />
                 Creative Brand Experiences
                 </p>
                 
               </div>
   
               <div className='service-services-box page_text fw-bold'>
                 <div  className='page_text'>
                   <div className='underline'></div>
                   <p> Digital Growth Marketing</p>
                   <p>Visual Branding & Design</p>
                   <p>Professional Shoots & Media</p>
                        
                 </div>
   
                 <div className='page_text' >
                   <div className='underline'></div>
                    <p>Social Media & Content Strategy</p>
                   <p>Print & Digital Collateral</p>
                   <p>Website Development</p>
             
                 </div>
               </div>
             </div>
   
           </Container>
         </Container>
      <div className=''>
        <FAQ
          faqs={faqData}
          heading="We Design, Build & Market with Purpose
"
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
      
      <Container fluid className='coffee-fluid'>
<Container className='coffee-content-container'>
  <div className='coffee-text-div'>
    <img className='coffee-icons-img' src={require("../assets/coffee_icon.png")}alt=""/>
    <p>COFFEE CUPS</p>
    <p>20800</p>
  </div>
  <div className='vertical-line'></div>
  <div className='coffee-text-div'>
    <img className='coffee-icons-img' src={require("../assets/projects_icon.png")} alt=""/>
    <p>PROJECTS</p>
    <p>20800</p>
  </div>
    <div className='vertical-line'></div>
    <div className='coffee-text-div'>
    <img className='coffee-icons-img' src={require("../assets/working_days_icon.png")} alt=""/>
    <p>WORKING DAYS</p>
    <p>20800</p>
  </div>
     <div className='vertical-line'></div>
   <div className='coffee-text-div'>
    <img className='coffee-icons-img' src={require("../assets/clients_icon.png")}  alt=""/>
    <p>CLIENTS</p>
    <p>20800</p>
  </div>
</Container>
      </Container>
      <ClientReview />
      {/* <div>
        <Separate
          title="Our Client"
          heading={"We’re going to\nbecame partners\nfor the long run.."}
          description="Our clients describe us as a product team which creates amazing output, by crafting top-notch user experience."
          awards={awardsList}
        />
      </div> */}

      <LetsTalk/>
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