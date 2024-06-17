import "../Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Login({ isShowLoginSlideBar, setShowLoginSlideBar }) {
    const [option, setOption] = useState(1);
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    
    const [inputValueEmailReset, setInputValueEmailReset] = useState('');

    const [inputValueNameFirst, setInputValueFirstNameRegist] = useState('');
    const [inputValueNameLast, setInputValueLastNameRegist] = useState('');
    const [inputValueEmailRegist, setInputValueEmailRegist] = useState('');
    const [inputValuePassRegist, setInputValuePassRegist] = useState('');

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === "email") {
            setInputValueEmail(value);
        } else if (id === "password") {
            setInputValuePass(value);
        } else if (id === "email-reset") {
            setInputValueEmailReset(value);
        } else if (id === "firstname-regist") {
            setInputValueFirstNameRegist(value);
        } else if (id === "lastname-reset") {
            setInputValueLastNameRegist(value);
        } else if (id === "email-regist") {
            setInputValueEmailRegist(value);
        } else if (id === "password-reset") {
            setInputValuePassRegist(value);
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
        <div className={`login-title ${ (option == 1) ? "open" : "d-none"}`}>LOGIN</div>
        <div className={`reset-title ${(option == 2) ? "open" : "d-none"}`}>RESET YOUR PASSWORD</div>
        <div className={`reset-title ${(option == 3) ? "open" : "d-none"}`}>REGISTER</div>
        <div
          className="close"
          onClick={() => {
            setShowLoginSlideBar(false);
            setOption(1);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="content">
        <div className="main">
          <div className={`login ${ (option == 1) ? "open" : "d-none"}`}>
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
                    <span className="forgot-label" onClick={()=>{setOption(2)}}>Forgot your password?</span>
                </div>
                <div className="field mr-top">
                    <button onClick={handleSubmit}>Sign In</button>
                </div>
            </form>
            <div className="field mr-top">
              <span className="register-account" onClick={()=>{setOption(3)}}>
                New customer? Create your account
              </span>
            </div>
          </div>
          <div className={`reset ${(option == 2) ? "open" : "d-none"}`}>
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
            <div className="field mr-top">
              <span className="cancel-login" onClick={()=>{setOption(1)}}>
                Cancel
              </span>
            </div>
          </div>
          <div className={`login ${(option == 3) ? "open" : "d-none"}`}>
            <form autoComplete="off">
                <div className="field"> 
                    <input type="text" id="firstname-regist" 
                        value={inputValueNameFirst}
                        onChange={handleInputChange}
                        />
                    <label className={inputValueNameFirst ? "checking" : ""}>
                        First Name
                    </label>  
                </div>
                <div className="field mr-top">
                    <input type="text" id="lastname-regist"
                        value={inputValueNameLast}
                        onChange={handleInputChange}
                    />
                    <label className={inputValueNameLast ? "checking" : ""}>
                        Last Name
                    </label>
                </div>
                <div className="field mr-top"> 
                    <input type="email" id="email-regist" autoComplete="new-email"
                        value={inputValueEmailRegist}
                        onChange={handleInputChange}
                        />
                    <label className={inputValueEmailRegist ? "checking" : ""}>
                        Email <span className="required"> *</span>
                    </label>  
                </div>
                <div className="field mr-top">
                    <input type="password" id="password-regist" autoComplete="new-password"
                        value={inputValuePassRegist}
                        onChange={handleInputChange}
                    />
                    <label className={inputValuePassRegist ? "checking" : ""}>
                        Password <span className="required"> *</span>
                    </label>
                </div>
                <div className="field mr-top">
                    <button>Register</button>
                </div>
            </form>
            <div className="field mr-top">
              <span className="has-account" onClick={()=>{setOption(1)}}>
                    Already have an account? Login here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
