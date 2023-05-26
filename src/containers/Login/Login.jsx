import { useState } from "react";
import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconGg from "asset/Google.png";
import IconFace from "asset/face.png";
import IconGit from "asset/git.png";

const DivStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #7dc0ff 100%);
  h1 {
    text-align: center;
  }
  .cover {
    background: #ffffff;
    width: 500px;
    padding: 30px 30px;
    height: 540px;
    position: relative;
    border-radius: 1em;
    box-shadow: 0 088em 1.55em rgb(156, 156, 156);
    display: flex;
    flex-direction: column;
  }
  .user {
    font-size: 16px;
    font-family: cursive;
  }
  .username {
    width: 478px;
    height: 46px;
    border-radius: 4px;
    border: 1px solid #c0dbea;
    background-color: #c0dbea;
    text-indent: 20px;
  }
  .username:focus {
    outline-color: #ffffff;
  }
  .pass {
    font-size: 16px;
    font-family: cursive;
  }
  .password {
    width: 478px;
    height: 46px;
    border-radius: 4px;
    border: 1px solid #c0dbea;
    text-indent: 20px;
    background-color: #c0dbea;
  }
  .password:focus {
    outline-color: #ffffff;
  }
  .login-btn {
    width: 150px;
    height: 46px;
    background-color: #d885a3;
    border: 1px solid #d885a3;
    border-radius: 23px;
    color: white;
    position: relative;
    text-align: center;
  }
  .login-btn:hover {
    transform: scale(1.25);
  }
  .text {
    position: relative;
    bottom: -2em;
  }
  .hide {
    position: absolute;
    transform: scale(0);
  }
  .login-popup {
    position: absolute;
    height: 30em;
    width: 30em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.25em;
    background-color: #ff040453;
    color: #ffffff;
    bottom: 0;
    transition: 1.5s;
  }
  .DivButton {
    text-align: center;
    width: 478px;
  }
  .IconEye {
    transform: translate(-30px, -36px);
    text-align: end;
  }
  #or {
    text-align: center;
    width: 478px;
  }
  #order-choice {
    text-align: center;
    width: 478px;
  }
  #button-google {
    width: 125px;
    height: 50px;
    border-radius: 40px;
    background-color: white;
    border: 1px solid #6096b4;
    position: relative;
  }
  #button-google::after {
    content: "";
    width: 30px;
    height: 30px;
    background-image: url(${IconGg});
    background-repeat: no-repeat;
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 50%;
    transform: translate(20px, -12px);
  }
  #button-git {
    width: 125px;
    height: 50px;
    border-radius: 40px;
    background-color: white;
    border: 1px solid #6096b4;
    position: relative;
  }
  #button-git::after {
    content: "";
    width: 30px;
    height: 30px;
    background-image: url(${IconGit});
    background-repeat: no-repeat;
    top: 50%;
    right: 50%;
    transform: translate(20px, -12px);
    position: absolute;
    display: inline-block;
  }
  #button-face {
    width: 125px;
    height: 50px;
    border-radius: 40px;
    background-color: white;
    border: 1px solid #6096b4;
    position: relative;
  }
  #button-face::after {
    content: "";
    width: 30px;
    height: 30px;
    background-image: url(${IconFace});
    background-repeat: no-repeat;
    top: 50%;
    right: 50%;
    transform: translate(20px, -12px);
    position: absolute;
    display: inline-block;
  }
  #footer-left {
    text-align: center;
    width: 478px;
  }
  #signup {
    color: #d885a3;
    font-family: cursive;
    font-size: 14px;
  }
  #donot {
    color: #000000;
    font-family: cursive;
    font-size: 14px;
  }
`;
const Login = () => {
  const [popupStyle, showPopup] = useState("hide");
  const popop = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <DivStyle>
        <div className="cover">
          <h1>Login</h1>
          <label className="user">Username</label>
          <br />
          <input className="username" type="text" placeholder="Username" />
          <br />
          <label className="pass">Password</label>
          <br />
          <input
            className="password"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
          />
          <span className="IconEye">
            <RemoveRedEyeIcon onClick={togglePassword} />
          </span>
          <br />

          <div className="DivButton">
            <button className="login-btn" onClick={popop}>
              Login
            </button>
          </div>
          <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Username or password incorrect</p>
          </div>
          <br />
          <div id="or">
            <label for="">or continue with</label>
          </div>
          <br />
          <div id="order-choice">
            <button id="button-google"></button>
            <button id="button-git"></button>
            <button id="button-face"></button>
          </div>
          <br />
          <div id="footer-left">
            <span id="donot">Don’t have an account yet?</span>
            <span id="signup">Sign up for free</span>
          </div>
        </div>
      </DivStyle>
    </>
  );
};
export default Login;
