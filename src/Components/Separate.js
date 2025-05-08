import React from 'react'
import { Container } from 'react-bootstrap'
import "./Separate.css"

const Separate = (props) => {
  return (
    <Container fluid className='Separate-container-fluid'>
      <Container className='Separate-content-container'>
        <div className='Separate-left-section'>
          <p className='page_text'>{props.title}</p>
         
          <h3 className='page_main_heading'>
            {props.heading?.split("\n").map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
          </h3>
        </div>

        <div className='Separate-right-section'>
          <div className='award-heading-box'>
            <p className='page_text'>{props.description}</p>
          </div>

          <div className='award-imgs-box'>
            {props.Separate?.map((award, index) => (
              <div className='award-img-div' key={index}>
                <img src={award.img} alt="award" />
                <p>{award.imgTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Separate
