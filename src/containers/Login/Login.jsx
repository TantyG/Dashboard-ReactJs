import { useState } from "react";
import styled from "styled-components";


const DivStyle = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #7dc0ff 100%);
    h1{
        text-align: center;
    }
    .cover{
        background:  #FFFFFF;
        width: 500px;
        padding: 30px 30px;
        height: 500px;
        position: relative;
        border-radius: 1em;
        box-shadow: 0 088em 1.550em rgb(156, 156, 156);
        display: flex;
        flex-direction: column;
    }
    .user{
        font-size: 16px;
        font-family: cursive;
    }
    .username{
        width: 478px;
        height: 46px;
        border-radius: 4px;
        border: 1px solid #C0DBEA;
        background-color: #C0DBEA;
    }
    .username:focus{
        outline-color: #FFFFFF;
    }
    .pass{
        font-size: 16px;
        font-family: cursive;
    }
    .password{
        width: 478px;
        height: 46px;
        border-radius: 4px;
        border: 1px solid #C0DBEA;
        background-color: #C0DBEA;
    }
    .password:focus{
        outline-color: #FFFFFF;
    }
    .login-btn{
        width: 150px;  
        height: 46px;
        background-color: #D885A3;
        border: 1px solid #D885A3;
        border-radius: 23px;
        color: white;
        position: relative;
        text-align: center;
    }
    .login-btn:hover{
        transform: scale(1.25);
    }
    .text{
        position: relative;
        bottom: -2em;
    }
    .hide{
        position: absolute;
        transform: scale(0);
    }
    .login-popup{
        position: absolute;
        height: 30em;
        width: 30em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.25em;
        background-color: #ff040453;
        color: #FFFFFF;
        bottom: 0;
        transition: 1.5s;
    }
    .DivButton{
        text-align: center;
        width: 478px;
    }
`;
const Login = () => {
    const [popupStyle, showPopup] = useState("hide");
    const popop = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <>
            <DivStyle>
                <div className="cover">
                    <h1>Login</h1>
                    <label className="user">Username</label><br/>
                    <input className="username" type="text" placeholder="Username"/><br/>
                    <label className="pass">Password</label><br/>
                    <input className="password" type="password" placeholder="Password"/><br/>
                    <div className="DivButton">
                        <button className="login-btn" onClick={popop}>Login</button>
                    </div>
                    <div className={popupStyle}>
                        <h3>Login Failed</h3>
                        <p>Username or password incorrect</p>
                    </div>
                </div>
            </DivStyle>
        </>
    )   
}
export default Login