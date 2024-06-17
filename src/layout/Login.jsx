import "../Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Login({ isShowLoginSlideBar, setShowLoginSlideBar }) {
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === "email") {
            setInputValueEmail(value);
        } else if (id === "password") {
            setInputValuePass(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValueEmail!== undefined && inputValueEmail!== null && inputValueEmail!== '' && inputValuePass!== undefined && inputValuePass!== null && inputValuePass!== '') {
            setShowLoginSlideBar(false);
            setInputValueEmail('');
            setInputValuePass('');
        }else{
            alert('Vui lòng nhập đầy đủ thông tin');
        }
    };


  return (
    <div className={`login-sidebar  ${isShowLoginSlideBar ? "open" : "d-none"}`}>
      <div className="header d-flex">
        <div className="login-title">LOGIN</div>
        <div
          className="close"
          onClick={() => {
            setShowLoginSlideBar(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="content">
        <div className="main">
          <div className="login">
            <form autoComplete="off">
                <div className="field"> 
                    <input type="email" autoComplete="new-email" id="email" 
                        value={inputValueEmail}
                        onChange={handleInputChange}
                        />
                    <label className={inputValueEmail ? "checking" : ""}>
                        Email <span className="required"> *</span>
                    </label>  
                </div>
                <div className="field mr-top">
                    <input type="password" autoComplete="new-password" 
                        id="password"
                        value={inputValuePass}
                        onChange={handleInputChange}
                    />
                    <label className={inputValuePass ? "checking" : ""}>
                        Password <span className="required"> *</span>
                    </label>
                </div>
                <div className="field mr-top">
                    <span className="forgot-label">Forgot your password? </span>
                </div>
                <div className="field mr-top">
                    <button onClick={handleSubmit}>Sign In</button>
                </div>
            </form>
            <div className="field mr-top">
              <a href="#" className="register-account">
                New customer? Create your account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
