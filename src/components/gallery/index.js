
import React from 'react';
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { heroHeadingFlowerImg } from '../../asserts/images';
import CustomButton from '../CustomButton';

const Gallery = () => {
  return (
    <>
      <section className='image_gallery_section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={8} sm={6}>
            <div>
                <div class="d-flex align-items-center justify-content-start gap-3">
                  
                  <h2 class="primaryHeading contactBlueHeading">our Gallery</h2>

                  <div class="heroHeadingImg03" bis_skin_checked="1">
                    <img src={heroHeadingFlowerImg} alt="hero"></img>
                  </div>
              </div>
            </div>
          </Col>

          <Col lg={4} sm={6}>
            <div className='text-right'>
              <CustomButton
                                type="button"
                                className="yellowActionBtn"
                                text="View All"
                            />
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default Gallery