import styled from "styled-components";
import LogoHome from "../asset/logo-home.png";

const LogoStyled = styled.div`
    width: 166px;
    height: 56px;
    display: flex;
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
const Logo = () => {
    return(
        <>
            <LogoStyled>
            <img src={LogoHome} alt="" />
                <div className="headerSidebar">
                    <div className="title">MyNFT</div>
                    <div className="bottomTitle">NFT Marketplace</div>
            </div>
            </LogoStyled>
        </>
    )
}
export {Logo}