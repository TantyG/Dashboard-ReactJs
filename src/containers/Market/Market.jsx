import Header from "Header";
import { SideBar } from "sidebar";
import styled from "styled-components"

const DivStyle = styled.div`
    background-color: rgb(202, 234, 230);
    min-height: 100vh;
    display: flex;
    font-size: calc(10px + 2vmin);
    color: white;
    height: auto;
    .left{
    float: left;
    width: 20%;
    background: white;
    height: auto;
    
  }
  .right{
    float: right;
    width: 80%;
    height: auto;
  }
`;
const Market = () => {
    return (
        <>
            <DivStyle>
            <div className="left">
                <SideBar title={"MyNFT"} bottomTitle={"NFT Marketplace"}></SideBar>
            </div>
            <div className="right">
            <Header></Header>
            <h2>Market</h2>
            </div> 
            </DivStyle>
        </>
    )
}
export default Market