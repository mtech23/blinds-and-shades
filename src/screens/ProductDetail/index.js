
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomBanner from '../../components/CustomBanner';
import UserLayout from '../../components/Layout/userlayout';
import "./style.css";
import {productDetailImg, productDetailImg02, productDetailImg03, productDetailImg04, productDetailImg05, productDetailImg06 } from '../../asserts/images';
import { useState } from 'react';


const ProductDetail = () => {

    const images = [productDetailImg, productDetailImg02, productDetailImg03, productDetailImg04, productDetailImg05, productDetailImg06];

    const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
        <UserLayout>

            <CustomBanner text="product"/>

            <section className='product_detail_section'>
                <Container>
                    <Row>
                        <Col xs={12} sm={10} lg={6}>
                            <div className='main_product_images'>
                                <div className='product_single_image'>
                                    <img src={selectedImage} alt='product' className='img-fluid'></img>
                                </div>
                            </div>

                            <div className='thumbnail_images'>

                            <div className="thumbnail-container">
                                {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    className="thumbnail"
                                    onClick={() => setSelectedImage(image)}
                                    width="100px"
                                    height="100px"
                                />
                                ))}
                            </div>
{/*                             
                                <div className='single_thumbnail_img'>
                                    <img src="../../asserts/images/pordimg02.png" alt='pro'></img>
                                </div>

                                <div className='single_thumbnail_img'>
                                    <img src="../../asserts/images/pordimg03.png" alt='pro'></img>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </UserLayout>
        
    </>
  )
}

export default ProductDetail