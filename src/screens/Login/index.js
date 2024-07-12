import React, {useState} from 'react'
import UserLayout from '../../components/Layout/userlayout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import Registration from '../../components/Registration';

import UserLogin from '../../components/UserLogin';


const Login = () => {

  const [activeSectionPart, setActiveSectionPart] = useState('login');

  const handleToggleSection = (section) => {
    setActiveSectionPart(section);
  };


  return (
    <>
        <UserLayout>
          
          <section className='login_section'>

            <Container>
              <Row>
                <Col sm={10} lg={6} className='mx-auto'>
                  <div className='main_login'>

                    <div className='login_register_actionBtns'>
                      <button className={`user_login_btn ${activeSectionPart === "login" ? "buttonActive" : ""}`} onClick={() => handleToggleSection('login')}>Login</button>
                      <button className={`user_login_btn ${activeSectionPart === "register" ? "buttonActive" : ""}`} onClick={() => handleToggleSection('register')}>Register</button>
                    </div>

                    <div className='py-4'>

                    {activeSectionPart === 'login' ? <UserLogin /> : <Registration />}

                    </div>

                  </div>
                </Col>
              </Row>
            </Container>

          </section>

        </UserLayout>
    </>
  )
}

export default Login