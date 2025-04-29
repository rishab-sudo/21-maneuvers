import React from 'react'
import { Container } from 'react-bootstrap'
import "./SeoService.css"

const SeoService = () => {
  return (
    <>
      <Container fluid className="seo-service-container-fluid g-0">
        <Container className='seo-top-content-container'>
          <div className='seo-service-top-section g-0'>
            <div>
              <img className='seo-img' src={require("../assets/slide21.jpg")} alt="Seo-Service" />
            </div>

            <div>
              <p className='page_text'>
                Search Engine Optimization (SEO) 🔍 – The Foundation of Digital Growth
                In today’s competitive digital space, *being found on Google is everything*. SEO isn’t just about rankings — it’s about visibility, credibility, and consistent lead generation without spending on ads.
                At our agency, we focus on *proven strategies* that help your website rank higher, attract the right audience, and convert visitors into customers.
              </p>
            </div>
          </div>

          <div>
            <p className='page_heading'>Why SEO is Important: </p>
            <p> 93% of online experiences begin with a search engine.</p>
            <p> 75% of users never scroll past the first page of results.</p>
            <p> Organic traffic brings *trust* and *long-term ROI*.</p>
          </div>
          <br />
          <div className='we-do-div'>
            <p className='page_heading'>What We Do in SEO:</p>
            <p> ✅ Technical SEO & Site Audits  </p>
            <p> ✅ Keyword Research & Strategy  </p>
            <p> ✅ On-Page Optimization </p>
            <p> ✅ High-Quality Link Building  </p>
            <p> ✅ Local SEO & Google Business Profile  </p>
            <p> ✅ Content Planning & Blog Strategy  </p>
            <p> ✅ Monthly Reporting & Improvements </p>
          </div>

          <div>
            <p>💡 *SEO is not a one-time task* — it’s a consistent process that delivers long-term results. We don’t promise shortcuts. We
              deliver success with data, experience, and hard work.</p>
          </div>
        </Container>
      </Container>


      <div className="seo-achieve-container">
        <div className="seo-left">
          <h2>🚀 What We've Achieved with SEO</h2>
          <p>
            Over the years, our strategic SEO campaigns have consistently delivered measurable results.
            From dominating Google’s first page to driving thousands of monthly organic visitors,
            our track record speaks for itself. Here’s a snapshot of our success.
          </p>
          <ul>
            <li>Consistent growth in high-converting traffic</li>
            <li>Data-driven SEO tactics that actually work</li>
            <li>Improved visibility for local and global brands</li>
          </ul>
        </div>
        <div className="seo-right">
          <h3>📈 Numbers We’re Proud Of</h3>
          <table>
            <thead>
              <tr>
                <th>Result</th>
                <th>Achievement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Top 3 Google Rankings</td>
                <td>30+ Competitive Keywords</td>
              </tr>
              <tr>
                <td>Monthly Organic Visitors</td>
                <td>50,000+ Across All Projects</td>
              </tr>
              <tr>
                <td>Leads Generated via SEO</td>
                <td>3,500+ Quality Leads</td>
              </tr>
              <tr>
                <td>Blogs Ranked on 1st Page</td>
                <td>100+ Articles</td>
              </tr>
              <tr>
                <td>Local Businesses Boosted</td>
                <td>15+ Businesses Ranked on Maps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </>

  )
}

export default SeoService