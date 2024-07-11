
import React, {useState} from 'react'
import CustomBanner from '../../components/CustomBanner'
import UserLayout from '../../components/Layout/userlayout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import UserSection from '../../components/UserSection';
import CartProducts from '../../components/CartProducts';

const Account = () => {

    const [activeSection, setActiveSection] = useState('A');

    const handleToggleSection = (section) => {
        setActiveSection(section);
      };

  return (
    <>
        <UserLayout>

            <CustomBanner text="my account"/>

            <section className='account_section'>
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <div>
                                  <div>
                                    <h4 class="secondary_heading text-center blueHeading">USERNAME</h4>
                                  </div>

                                  <div className='all_account_tab_btns'>
                                    <button className='account_tab_btn' onClick={() => handleToggleSection('A')}>My Account</button>
                                    <button className='account_tab_btn'>Profile</button>
                                    <button className='account_tab_btn'>Shipping Details</button>
                                    <button className='account_tab_btn'>Wishlist</button>
                                    <button className='account_tab_btn' onClick={() => handleToggleSection('B')}>Shopping cart</button>
                                  </div>

                                  {activeSection === 'A' ? <UserSection /> : <CartProducts />}

                                  {/* <CartProducts/> */}

                                    {/* <UserSection/> */}

                                    
                            </div>
                        </Col>

                        
                    </Row>
                </Container>
            </section>

        </UserLayout>
    </>
  )
}

export default Account