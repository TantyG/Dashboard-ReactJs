import { Card } from "Card";
import { SideBar } from "sidebar";
import "../Home/Home.css";
import Header from "Header";
import styled from "styled-components";
import ImgContent from "asset/Background.png"; 
import { Button } from "Button";

const DivContent = styled.div`
  display: flex;
  padding: 10px 55px;
  .textContent{
    height: 354px;
    width: 716px;
  }
  .Discover{
    font-family: "Epilogue";
    font-size: 54px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0.05em;
    text-align: left;

  }
  .imgContent{
    height: 480px;
    width: 825px;
    border-radius: 12px;
    position: relative;
    background-size: cover;
  }
  .DivFormText{
    position: relative;
    top: -50px;
    left: 40px;
    transform: translate(25px , -360px);
  }
  .DivButton{
    margin-top: 40px;
    text-align: left;
  }
`;
const Home = () =>{
    return (
        <>
         <div className="App">
          <header className="App-header">
        {/* <Hello name="Billion" age={10}/>
        <Button text="Button"/>
        <GreenButton></GreenButton>
        <Counter2 name="Billion"></Counter2> */}
        {/* <Counter name="Billion"></Counter> */}
        {/* <Button btnText={"10"} onClick={() => console.log("Click")}><span>Click me</span></Button>
        <Button borderColor="#E9E9E9" btnText={"-10"}>20%</Button>
        <Button textColor="white" bgColor="transparent" borderColor="white">0%</Button>
        <Button btnText={"-10"}>20%</Button> */}
      
          <div className="left">
            <SideBar title={"MyNFT"} bottomTitle={"NFT Marketplace"}></SideBar>
          </div>
          <div className="right">
            <Header></Header>
            <DivContent>
              <div className="textContent">
                <img className="imgContent" src={ImgContent} alt="" />
                <div className="DivFormText">
                <div className="Discover">
                  Discover, Create and Sell Your Own NFT.
                </div>
                <div className="DivButton">
                  <Button bdRa={40} borderColor="#E9E9E9">Discover</Button>{' '} &nbsp;
                  <Button bdRa={40} textColor="white" bgColor="transparent" borderColor="white">Create</Button>
                </div>
                </div>
              </div>
              <div className="Card">
                <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
                <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
                <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
                <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
              </div>
            </DivContent>
          </div>
  
      </header>
    </div>
        </>
    )
}
export default Home;