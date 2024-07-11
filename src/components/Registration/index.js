import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const Registration = () => {
    const navigate = useNavigate();
  return (
    <>
         <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label login_label">Email address <span className='yellow_star'>*</span></label>
                      <input type="email" class="form-control register_custom_input" id="exampleFormControlInput1" placeholder=""></input>
                    </div>

                    <div>
                        <label for="" class="login_label">A link to set a new password will be sent to your email address.</label>
                    </div>

                    <div>
                    <label for="" class="login_label">Your personal data will be used to support your experience throughtout this website, to manage access to your account, and for other purposes described in our <Link className="privacy">privacy policy</Link>.</label>
                    </div>

                    <div>
                    <CustomButton
                        type="button"
                        className="w-100 user_login_actionBth"
                        text="register"
                        onClick={() => navigate("/")}
                    />
                    </div>
    </>
  )
}

export default Registration