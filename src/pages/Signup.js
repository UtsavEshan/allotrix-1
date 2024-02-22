import React from "react";
import { Link } from 'react-router-dom';
import "../styles/signup.css";

const Signup = () => {
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
        <input
          type="text"
          placeholder="Full Name"
          className="form__input"
          id="name"
        />
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

      <div className="Login-redirect">
        <p>Already have an Allotrix Account?<Link to={'/login'} className='text-allotrix-std'>Login</Link> Here </p>
        
      </div>
    </div>
  );
};

export default Signup;
