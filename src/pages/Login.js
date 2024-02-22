import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/signup.css";

const Login = () => {
  return (
    <div className="container">
      <button className="google-button">
        <div className="img"></div>
        Continue with Google
        </button>
      <h5 >
                            Or
                        </h5>
      <form className="form">
        {/* <label for="name" class="form__label">Name</label> */}

        <input
          type="email"
          placeholder="Email"
          className="form__input"
          id="email"
        />
        {/* <label for="email" class="form__label">Email</label> */}

        <input
          type="text"
          placeholder="Subject"
          className="form__input"
          id="subject"
        />
        {/* <label for="subject" class="form__label">Subject</label> */}
        <button className="sign-up">
          SIGN UP
        </button>
      </form>

      <div className="signup-redirect">
        <p>Don't have an Allotrix account?<Link to={'/Signup'} className='text-allotrix-std'> Sign Up </Link>now</p>
        
      </div>
    </div>
  )
}

export default Login;