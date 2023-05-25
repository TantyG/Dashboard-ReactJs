import styled from "styled-components";
import LogoHome from "../asset/logo-home.png";
import { IntoSideBar } from "./IntoSideBar";
import  IconDashboard from "asset/category.png";
import IconShop from "asset/shop.png";
import IconJudge from "asset/judge.png";
import IconCrypto from "asset/buy-crypto.png";
import IconWallet from "asset/wallet.png";
import IconLove from "asset/lovely.png";
import IconHistory from "asset/clock.png";
import IconSet from "asset/setting.png";
import IconlLightMod from "asset/lightmod.png";
import IconSun from "asset/sun.png";
import IconMoon from "asset/moon.png";
import IconETH from "asset/Ethereum(ETH).png";
import IconEthereum from "asset/Ethereum.png";
import ArrowLeft from "asset/arrow-left.png";
import IconPlus from "asset/plus.png";
import IconETHSmall from "asset/Ethereum(ethsmall).png";
import { NavLink } from "react-router-dom";

const DivHeader = styled.div`
    width: 166px;
    height: 56px;
    display: flex;
    padding: 20px 60px;
    .headerSidebar{
        padding: 0px 10px;
    }
    .title{
        font-family: "DM Sans";
        font-size: 28px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        color: #27262E;
    }
    .bottomTitle{
        font-family: "DM Sans";
        font-size: 10px;
        font-weight: 700;
        line-height: 13px;
        letter-spacing: 0em;
        text-align: left;
        color: #7A797D;
    }
`;
const CenterSidebar = styled.div`
    .profile{
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.14em;
        text-align: left;
        color: #27262E;
        padding: 18px 60px;
    }
`;
const FooterSidebar = styled.div`
    .Other{
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.14em;
        text-align: left;
        color: #27262E;
        padding: 18px 60px;
    }
    .lightMoon{
        display: flex;
    }
    .behindLight{
        height: 30px;
        width: 56px;
        left: 204px;
        top: 638px;
        border-radius: 20px;
        padding: 4px;
        border: 1px solid #F0F0F0;
        background: #F0F0F0;
        display: flex;
    }
    .sun{
        height: 22px;
        width: 22px;
        left: 0px;
        top: 0px;
        border-radius: 20px;
        padding: 4px;
        background: #FFFFFF;
        position: relative;
    }
    .moon{
        height: 22px;
        width: 22px;
        left: 30px;
        top: 4px;
        border-radius: 20px;
        padding: 4px;
        position: relative;
    }
    .imgSun{
        height: 14px;
        width: 14px;
        left: 6px;
        top: 7px;
        border-radius: 0px;
        position: absolute;

    }
    .imgMoon{
        position: absolute;
        height: 14px;
        width: 14px;
        right: 35px;
        top: 6px;
        border-radius: 0px;
    }
`;

const Footter = styled.div`
    height: 220px;
    width: 228px;
    border-radius: 16px;
    background: linear-gradient(#5429FF, #BBAAFF);
    margin: 0 auto;
    position: relative;
    .text{
        height: 63px;
        width: 120px;
        margin:  0 auto;
    }
    .your{
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;

    }
    .number{
        font-family: "DM Sans";
        font-size: 30px;
        font-weight: 700;
        line-height: 39px;
        letter-spacing: 0em;
        text-align: center;
        padding: 10px;
    }
    .imgText{
        display: flex;
        width: 120px;
        justify-content: center;
        margin-top: 20px;
    }
    .imgETH{
        height: 16px;
        width: 16px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        padding: 0px 10px;
    }
    .textETH{
        height: 16px;
        width: 23px;
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
    }
    .imgEthereum{
        position: absolute;
        height: 152px;
        width: 92px;
        left: 15px;
        top: 41px;
        border-radius: 0px;
    }
    .imgEthereumSmall{
        height: 40px;
        width: 50px;
        margin-left: 160px;
    }
`;
const Button = styled.div`
    text-align: center;
    margin-top: 29px;
    .Button{
        height: 49px;
        width: 196px;
        border-radius: 12px;
        padding: 14px 16px 14px 16px;
        justify-content: space-between;
        border: 1px solid #FFFFFF;
        position: relative;
        font-family: "DM Sans";
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
    }
    .Button::before{
        content: "";
        width: 30px;
        height: 30px;
        background-image: url(${IconPlus});
        background-repeat: no-repeat;
        position: absolute;
        display: inline-block;
        top: 15px;
        left: 16px;
    }
    .Button::after{
        content: "";
        width: 30px;
        height: 30px;
        background-image: url(${ArrowLeft});
        background-repeat: no-repeat;
        position: absolute;
        display: inline-block;
        top: 19px;
        right: 0px;
    }
    
`;
export const SideBar = ({title, bottomTitle}) => {
    return (
        <>
            <DivHeader>
                <img src={LogoHome} alt="" />
                <div className="headerSidebar">
                    <div className="title">{title}</div>
                    <div className="bottomTitle">{bottomTitle}</div>
                </div>
            </DivHeader>
            <div>
                <NavLink to="/"> 
                <IntoSideBar img={IconDashboard} text={"Dashboard"} colorText="#5429FF"></IntoSideBar>
                </NavLink>
                <NavLink to="/market">
                <IntoSideBar img={IconShop} text={"Market"} colorText={"#7A797D"}></IntoSideBar>
                </NavLink>
                
                <IntoSideBar img={IconJudge} text={"Active Bids"} colorText={"#7A797D"}></IntoSideBar>
            </div>
            <CenterSidebar>
                <div className="profile">Profile</div>
                <IntoSideBar img={IconCrypto} text={"My Portfolio"} colorText={"#7A797D"}></IntoSideBar>
                <IntoSideBar img={IconWallet} text={"Wallet"} colorText={"#7A797D"}></IntoSideBar>
                <IntoSideBar img={IconLove} text={"Favourites"} colorText={"#7A797D"}></IntoSideBar>
                <IntoSideBar img={IconHistory} text={"History"} colorText={"#7A797D"}></IntoSideBar>
                <IntoSideBar img={IconSet} text={"Settings"} colorText={"#7A797D"}></IntoSideBar>
            </CenterSidebar>
            <FooterSidebar>
                <div className="Other">Other</div>
                <div className="lightMoon">
                    <IntoSideBar img={IconlLightMod} text={"Light Mode"} colorText={"#7A797D"}></IntoSideBar>
                    <div className="behindLight">
                        <div className="sun">
                            <img className="imgSun" src={IconSun} alt="" />
                        </div>
                        <div className="moon">
                            <img className="imgMoon" src={IconMoon} alt="" />
                        </div>
                    </div>
                </div>
            </FooterSidebar>
            <Footter>
                <div className="footer">
                    <img className="imgEthereumSmall" src={IconETHSmall} alt="" />
                    <div className="text">  
                        <div className="your">
                        Your Balance
                        </div>
                        <div className="number">1,034.02</div>
                        <div className="imgText">
                            <img className="imgETH" src={IconETH} alt="" />
                            <div className="textETH">ETH</div>
                        </div>
                    </div>
                    <img className="imgEthereum" src={IconEthereum} alt="" />
                    
                </div>
                <Button>
                    <div>
                        <div>
                            <button className="Button">Top Up Balance</button>
                        </div>
                        
                    </div>
                </Button>
            </Footter>
        </>
    )
}