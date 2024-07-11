import React from 'react'
import CustomButton from '../CustomButton'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./style.css"

const UserLogin = () => {

    const navigate = useNavigate();
  return (
    <>
        <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label login_label">Username or email address <span className='yellow_star'>*</span></label>
                      <input type="email" class="form-control register_custom_input" id="exampleFormControlInput1" placeholder=""></input>
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput12" class="form-label login_label">Password <span className='yellow_star'>*</span></label>
                      <input type="password" class="form-control register_custom_input" id="exampleFormControlInput12" placeholder=""></input>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                      <label class="form-check-label login_label" for="flexCheckDefault">
                        Remember me
                      </label>
                    </div>

                    <div>
                    <CustomButton
                        type="button"
                        className="w-100 user_login_actionBth"
                        text="log in"
                        onClick={() => navigate("/")}
                    />
                    </div>

                    <div className='text-center'>
                        <Link className="lost_your_password">Lost your password?</Link>
                    </div>
    </>
  )
}

export default UserLogin