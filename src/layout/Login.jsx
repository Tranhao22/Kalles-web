import "../Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Login({ isShowLoginSlideBar, setShowLoginSlideBar }) {
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');

    
    const [inputValueEmailReset, setInputValueEmailReset] = useState('');

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === "email") {
            setInputValueEmail(value);
        } else if (id === "password") {
            setInputValuePass(value);
        } else if (id === "email-reset") {
            setInputValueEmailReset(value);
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
        <div className="login-title d-none">LOGIN</div>
        <div className="reset-title d-none">RESET YOUR PASSWORD</div>
        <div className="reset-title">REGISTER</div>
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
          <div className="login d-none">
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
                    <span className="forgot-label">Forgot your password?</span>
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
          <div className="reset d-none">
            <p className="p-reset">Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
            <form  autoComplete="off">
                <div className="field mr-top"> 
                    <input type="email" autoComplete="new-email" id="email-reset" 
                        value={inputValueEmailReset}
                        onChange={handleInputChange}
                        />
                    <label className={inputValueEmailReset ? "checking" : ""}>
                        Email address<span className="required"> *</span>
                    </label>  
                </div>
                
                <div className="field mr-top">
                    <button onClick={handleSubmit}>Sign In</button>
                </div>
            </form>
          </div>
          <div className="login">
            <form autoComplete="off">
                {/* <div className="field"> 
                    <input type="email" autoComplete="new-email" id="email-regist" 
                        value={inputValueEmail}
                        onChange={handleInputChange}
                        />
                    <label className={inputValueEmail ? "checking" : ""}>
                        Email <span className="required"> *</span>
                    </label>  
                </div>
                <div className="field mr-top">
                    <input type="password" autoComplete="new-password" 
                        id="password-regist"
                        value={inputValuePass}
                        onChange={handleInputChange}
                    />
                    <label className={inputValuePass ? "checking" : ""}>
                        Password <span className="required"> *</span>
                    </label>
                </div> */}
                <div className="field"> 
                    <input type="email" autoComplete="new-email" id="email-regist" 
                        value={inputValueEmail}
                        onChange={handleInputChange}
                        />
                    <label className={inputValueEmail ? "checking" : ""}>
                        Email <span className="required"> *</span>
                    </label>  
                </div>
                <div className="field mr-top">
                    <input type="password" autoComplete="new-password" 
                        id="password-regist"
                        value={inputValuePass}
                        onChange={handleInputChange}
                    />
                    <label className={inputValuePass ? "checking" : ""}>
                        Password <span className="required"> *</span>
                    </label>
                </div>
                <div className="field mr-top">
                    <button>Register</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
