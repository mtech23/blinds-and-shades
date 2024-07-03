import React from "react";
import UserLayout from "../../components/Layout/userlayout";
// import CustomButton from '../../components/CustomButton';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { heroHeadingImg, heroHeadingFlowerImg, heroHeadingSunImg, heroSectionImg01, heroSectionImg02, welcomeImg01 } from "../../asserts/images";
import "./style.css";

const Home = () => {
  return (
    <>
      <UserLayout>

         {/* <CustomButton type="button" className="" text=" This is actionBtn"/> */}

        <section className="best_blinds_section">
          <Container>
            <Row>
              <Col md={12}>
                <div className="pt-4 pb-3">
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <h2 className="primaryHeading">Find ThE Best</h2>

                    <div className="heroHeadingImg">
                      <img src={heroHeadingImg} alt="hero"></img>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center gap-4 pt-2 moving_text_further">

                    <div className="heroHeadingImg02">
                      <img src={heroHeadingFlowerImg} alt="hero"></img>
                    </div>

                    <h2 className="primaryHeading">BLINDS & SHADES</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>


          <div className="hero_section_imgs">
            <Row>
              <Col md={4}>
                <div className="d-flex justify-content-end h-100 flex-column left_hero_img">
                  <p className="hero_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                    mod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
                    quip ex ea commodo consequat uis aute irure dolor in repreh
                    enderit in voluptate velit esse.
                  </p>

                  <div>
                    <img src={heroSectionImg01} alt="" className="img-fluid"></img>
                  </div>
                </div>
              </Col>

              <Col md={8}>
                <div className="position-relative">
                  <div>
                    <img src={heroSectionImg02} alt="" className="img-fluid"></img>
                  </div>
                  <div className="sunFlowerImg">
                    <img src={heroHeadingSunImg} alt="sunflower_icon"></img>
                  </div>
                </div>
              </Col>
            </Row>
          </div>


        </section>

        <section>
        <Container>
          <Row>
            <Col md={5}>
              <div>
                <img src={welcomeImg01} alt="welcomeImg01" className="img-fluid"></img>
              </div>
            </Col>

            <Col md={7}>
              <div className="d-flex h-100 flex-column justify-content-center">
                  <div className="d-flex align-items-center justify-content-start gap-4">
                    <h2 className="primaryHeading">welcome to</h2>

                  </div>
                          
                    <div className="d-flex align-items-center justify-content-center gap-3">

                    <div className="heroHeadingImg03">
                      <img src={heroHeadingFlowerImg} alt="hero"></img>
                    </div>

                      <h2 className="primaryHeading font_yellow_color">BLINDSNSHADES</h2>
                    </div>

                    <p className="welcome_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

              </div>
            </Col>

            <Col md={7}>
              <div>
                <div>

                </div>
              </div>
            </Col>

            <Col md={5}>

            </Col>
          </Row>
        </Container>
        </section>
       
      </UserLayout>
    </>
  );
};
export default Home;
