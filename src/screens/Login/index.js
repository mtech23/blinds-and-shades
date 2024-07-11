import React, {useState} from 'react'
import UserLayout from '../../components/Layout/userlayout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import Registration from '../../components/Registration';

import UserLogin from '../../components/UserLogin';


const Login = () => {

  const [activeSectionPart, setActiveSectionPart] = useState('A');

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
                      <button className='user_login_btn' onClick={() => handleToggleSection('A')}>Login</button>
                      <button className='user_login_btn' onClick={() => handleToggleSection('B')}>Register</button>
                    </div>

                    <div className='py-4'>

                    {activeSectionPart === 'A' ? <UserLogin /> : <Registration />}

                      {/* <UserLogin/> */}

                      {/* <Registration/> */}
                      

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