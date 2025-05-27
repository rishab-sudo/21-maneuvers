import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CountUp from 'react-countup';
import ImageSwiper from '../../Components/ImageSlider';
import ServiceSlider from "../../Components/HomeServiceSlider";
import LetsTalk from "../../Components/LetsTalk"
import benefits from "../../Components/HomeServiceSlider"
import "swiper/css";
import "swiper/css/navigation";
import "./SeoService.css";


const slideData = [
  { image: require("../../assets/seo-img.png"), tagline: 'Boosts Visibility' },
  { image: require("../../assets/seo-img.png"), tagline: 'Drives Traffic' },
  { image: require("../../assets/seo-img.png"), tagline: 'Builds Trust' },
  { image:require("../../assets/seo-img.png"), tagline: 'Cost-Effective' },
  { image: require("../../assets/seo-img.png"), tagline: 'Better Experience' },
];

const SeoService = () => {


  return (
    <>
    {/* seo-banner-starts */}
 <div className="seo-banner-section">
  <Container className="seo-banner-content">
    <div className="seo-left-content">
      <p>EMPOWERING BRANDS WORLDWIDE TO REACH THEIR FULL POTENTIAL
</p>
      <h3>YOUR BRAND DESERVES TO RANK FIRST,<br/> WE MAKE IT HAPPEN</h3>
      <p>
      Boost your traffic and results with 21 Maneuvers’ expert SEO services. Combining creativity and technology, we deliver strategies that drive growth and track real business impact. Connect now for a personalized SEO plan!
      </p>
    </div>

    {/* Right image + circles */}
    <div className="seo-image-wrapper">
      <img className="seo-banner-right-img" src={require("../../assets/seo-img.png")} alt="SEO" />

      {/* Circles attached to image */}
      <div className="seo-circle circle-1">
        <div className="flip-inner">
          <div className="flip-front">93% CLIENT SATISFACTION SCORE</div>
          <div className="flip-back">
          <p>WHY OUR SATISFACTION SCORE STANDS OUT:</p>
          <li>Expert Project Management</li>
          <li>Clear ROI Tracking</li>
          <li>Wide-Ranging Skill Set</li>
          </div>
        </div>
      </div>
      <div className="seo-circle circle-2">
        <div className="flip-inner">
          <div className="flip-front">91% CLIENT RETENTION RATE </div>
        <div className="flip-back">
          <p>WHY IS OUR CLIENT RETENTION RATE SO HIGH?</p>
          <li>Personalized engagement</li>
          <li>Consistent results delivery</li>
          <li>Transparent communication</li>
          </div>
        </div>
      </div>
      <div className="seo-circle circle-3">
        <div className="flip-inner">
          <div className="flip-front">300% AVERAGE ROI FOR CLIENTS</div>
        <div className="flip-back">
          <p>WHY IS OUR ROI CONSISTENTLY HIGH?</p>
          <li>Data-driven strategies</li>
          <li>Continuous optimization</li>
          <li>Goal-focused execution</li>
          </div>
        </div>
      </div>
    </div>
  </Container>
</div>

{/* seo-banner-ends */}


{/* seo-benefits */}
    <ServiceSlider benefits={benefits} />
{/*  */}

{/* seo-growth-sec */}
    <Container fluid className="growth-section">
<Container className="growth-content-container">
  <div className="underline "></div>
  <p className="page_text">21 Maneuvers scaled BD Aromatics’s  SEO by implementing a focused editorial strategy, on-page optimizations, and creating high-impact content like glossaries, listicles, and resource tools.
</p>

  <Row>
<Col lg={4} md={4} sm={12}>
<div>
  <p className="page_text"> IMpressions</p>
  <div className="dotted-line"></div>
  <p className="growth-number">
                + <CountUp start={1} end={17} duration={3} separator="," suffix=" M" decimals={1} />
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div>
              <p className="page_text">Clicks</p>
              <div className="dotted-line"></div>
              <p className="growth-number">
                + <CountUp start={1} end={1.2} duration={3} separator="," suffix=" M" decimals={1} />
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div>
              <p className="page_text">Conversions</p>
              <div className="dotted-line"></div>
              <p className="growth-number">
                + <CountUp start={1} end={7 } duration={3} separator="," suffix=" K" decimals={1} />
              </p>
</div>
</Col>
  </Row>
  <img src={require("../../assets/chart.png")} style={{maxHeight:"100%",maxWidth:"100%"}} alt=""/>
</Container>
    </Container>
{/*  */}
{/* seo-graphite-sec */}
    <Container fluid className="graphite-section">
<Container className="graphite-content-container">
  <div className="graphite-text-div">
   {/* <p>graphite</p> */}
  <p className='page_text'>21 Maneuvers </p>
  <p className="page_heading">We don’t just do SEO, we drive results that move the needle.</p> <br/>
  <p className="page_text">Your team + our team = unstoppable momentum. Together, we drive smart, focused execution across technical SEO, content, and CRO: fast, clear, and collaborative.</p>
  {/* <button>Let's Connect </button> */}
  </div>
  <div className="graphite-img-wrapper">
  <img className="graphite-img"src={require("../../assets/chart.png")} style={{maxHeight:"100%",maxWidth:"100%"}} alt=""/>
  </div>
</Container>
    </Container>

{/*  */}

    <ImageSwiper slides={slideData} />;

{/*  */}

{/* seo - research -sec */}
<Container fluid className="research-section">
      <Container className="research-content-container">
        <div className="research-left">
          <p className="research-title">Our research reveals that 
</p>
          <p className="research-number">
              <CountUp start={1} end={95 } duration={2} separator="," suffix=" %" decimals={0} />
              </p>
        </div>

        <div className="research-right">
          <p className="research-highlight">of SEO work is wasted effort</p>
          <p className="research-desc page_text">
           After analyzing over 3,000 websites, we found that the majority of blog pages contribute less than 5% of overall traffic. The key? Focusing your strategy on the high-performing 5% that actually moves the needle.
          </p>
        </div>
      </Container>
    </Container>

    {/* seo-focus-sec */}
    <Container fluid className="focus-section">
<Container  className="focus-content-container">
  <div className="graphite-text-div">
  <p></p>
  <p className="page_heading">How to focus on the 5% that matters</p> <br/>
  <div className="bullet-paragraphs">
  <div className="bullet-paragraphs">
  <p className="square-bullet">Focus on improving rankings, driving qualified traffic, and capturing search intent
</p>
  <p className="square-bullet">Prioritize content strategies that earn backlinks and boost engagement</p>
  <p className="square-bullet">Optimize technical SEO to enhance crawlability, site speed, and long-term visibility</p>
</div>

</div>
 </div>

  <div className="focus-img-sec">
  <img className="focus-img" src={require("../../assets/chart.png")} style={{maxHeight:"100%",maxWidth:"100%"}} alt=""/>
  </div>
</Container>
</Container>

<Container>
  <div className="seo-bottom-text-div">
        <p className="page_heading " style={{fontWeight:"400"}}>
       By cutting out the guesswork, 21 Maneuvers delivers SEO that actually works, again and again. Our strategic, creative led approach drives scalable results across industries, turning rankings into revenues.
How much impact will SEO have on your growth?

        </p>
        {/* <button>Let's Connect </button> */}
      </div>
    </Container>
 
{/* seo-contact */}
   <LetsTalk/>
{/*  */}
    </>
  );
};

export default SeoService;




// import React from 'react'
// import { Container } from 'react-bootstrap'
// import "./SeoService.css"

// const SeoService = () => {
//   return (
//     <>
//       <Container fluid className="seo-service-container-fluid g-0">
//         <Container className='seo-top-content-container'>
//           <div className='seo-service-top-section g-0'>
//             <div>
//               <img className='seo-img' src={require("../../assets/slide21.jpg")} alt="Seo-Service" />
//             </div>

//             <div>
//               <p className='page_text'>
//                 Search Engine Optimization (SEO) 🔍 – The Foundation of Digital Growth
//                 In today’s competitive digital space, *being found on Google is everything*. SEO isn’t just about rankings — it’s about visibility, credibility, and consistent lead generation without spending on ads.
//                 At our agency, we focus on *proven strategies* that help your website rank higher, attract the right audience, and convert visitors into customers.
//               </p>
//             </div>
//           </div>

//           <div>
//             <p className='page_heading'>Why SEO is Important: </p>
//             <p> 93% of online experiences begin with a search engine.</p>
//             <p> 75% of users never scroll past the first page of results.</p>
//             <p> Organic traffic brings *trust* and *long-term ROI*.</p>
//           </div>
//           <br />
//           <div className='we-do-div'>
//             <p className='page_heading'>What We Do in SEO:</p>
//             <p> ✅ Technical SEO & Site Audits  </p>
//             <p> ✅ Keyword Research & Strategy  </p>
//             <p> ✅ On-Page Optimization </p>
//             <p> ✅ High-Quality Link Building  </p>
//             <p> ✅ Local SEO & Google Business Profile  </p>
//             <p> ✅ Content Planning & Blog Strategy  </p>
//             <p> ✅ Monthly Reporting & Improvements </p>
//           </div>

//           <div>
//             <p>💡 *SEO is not a one-time task* — it’s a consistent process that delivers long-term results. We don’t promise shortcuts. We
//               deliver success with data, experience, and hard work.</p>
//           </div>
//         </Container>
//       </Container>


//       <div className="seo-achieve-container">
//         <div className="seo-left">
//           <h2>🚀 What We've Achieved with SEO</h2>
//           <p>
//             Over the years, our strategic SEO campaigns have consistently delivered measurable results.
//             From dominating Google’s first page to driving thousands of monthly organic visitors,
//             our track record speaks for itself. Here’s a snapshot of our success.
//           </p>
//           <ul>
//             <li>Consistent growth in high-converting traffic</li>
//             <li>Data-driven SEO tactics that actually work</li>
//             <li>Improved visibility for local and global brands</li>
//           </ul>
//         </div>
//         <div className="seo-right">
//           <h3>📈 Numbers We’re Proud Of</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Result</th>
//                 <th>Achievement</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Top 3 Google Rankings</td>
//                 <td>30+ Competitive Keywords</td>
//               </tr>
//               <tr>
//                 <td>Monthly Organic Visitors</td>
//                 <td>50,000+ Across All Projects</td>
//               </tr>
//               <tr>
//                 <td>Leads Generated via SEO</td>
//                 <td>3,500+ Quality Leads</td>
//               </tr>
//               <tr>
//                 <td>Blogs Ranked on 1st Page</td>
//                 <td>100+ Articles</td>
//               </tr>
//               <tr>
//                 <td>Local Businesses Boosted</td>
//                 <td>15+ Businesses Ranked on Maps</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>


//     </>

//   )
// }

// export default SeoService