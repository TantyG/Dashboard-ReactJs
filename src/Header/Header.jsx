import styled from "styled-components"
import IconSearch from "asset/search-normal.png";
import IconAvatar from "asset/avatar.png";
import IconBell from "asset/Bell.png"
import IconCircleOrange from "asset/CircleOrange.png"
import { NavLink } from "react-router-dom";

const Nav = styled.div`
    background: rgb(202, 234, 230);
    height: 90px;
    padding: 10px 40px;
    .hearderNav{
        display: flex;
        justify-content: space-between;
    }
    .search-input{
        padding: 10px;
        height: 40px;
        width: 400px;
        border-radius: 35px;
        text-indent: 50px;
        border: 1px solid #FFFFFF;
        
    }
    .searchWrapper{
        position: relative;
    }
    .searchWrapper::before{
        content: "";
        width: 30px;
        height: 30px;
        background-image: url(${IconSearch});
        background-repeat: no-repeat;
        position: absolute;
        display: inline-block;
        top: 20px;
        left: 20px;
    }
    .endNav{
        display: flex;
    }
    .circle{
        height: 56px;
        width: 56px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1px solid #E9E9E9;
        
    }
    .circle-Div{
        position: relative;
    }
    .circle-Div::before{
        content: "";
        width: 30px;
        height: 30px;
        background-image: url(${IconBell});
        background-repeat: no-repeat;
        position: absolute;
        display: inline-block;
        top: 16px;
        left: 17px;
    }
    .circle-Div::after{
        content: "";
        width: 30px;
        height: 30px;
        background-image: url(${IconCircleOrange});
        background-repeat: no-repeat;
        position: absolute;
        display: inline-block;
        top: 16px;
        left: 30px;
    }
    .imgAva{
        margin-left: 20px;
        border-radius: 50%;
    }
`;
const Header = () => {
    return (
        <>
            <Nav>
                <div className="hearderNav">
                    <div className="searchWrapper"><input type="text" className="search-input" placeholder="Search Item, Collection and Account.."></input></div>
                    <div className="endNav">
                        <div className="circle-Div">
                            <div className="circle"></div>
                        </div>
                        <NavLink to="/login">
                            <img className="imgAva" src={IconAvatar} alt="" />
                        </NavLink>
                    </div>
                </div>
            </Nav>
        </>
    )
}
export default Header 