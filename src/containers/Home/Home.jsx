import { Card } from "Card";
import { SideBar } from "sidebar";
import "../Home/Home.css";
import Header from "Header";
import styled from "styled-components";
import ImgContent from "asset/Background.png"; 
import { Button } from "Button";
import { User } from "User";
import IconUser1 from "asset/User1.png";
import IconUser2 from "asset/User2.png";
import IconUser3 from "asset/User3.png";
import IconUser4 from "asset/User4.png";
import IconUser5 from "asset/User5.png";
import IconUser6 from "asset/User6.png";
import { Trending } from "Trending";
import Monkey from "asset/Mokey.png";
import MonkeyColor from "asset/MonkeyColor.png";
import ImgETH from "asset/Ethereumss.png";

const DivContent = styled.div`
  display: flex;
  padding: 10px 55px;
  .textContent{
    width: 60%;
    height: 450px;
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
    border-radius: 12px;
    position: relative;
    background-size: cover;
  }
  .DivFormText{
    position: relative;
    top: -50px;
    left: 40px;
    transform: translate(0px , -290px);
  }
  .DivButton{
    margin-top: 40px;
    text-align: left;
  }
`;

const Trendingg = styled.div`
    display: flex;
    .leftTrending{
      float: left;
      width: 60%;
      height: auto;
    }
    .topTrending{
      display: flex;
      justify-content: space-around;
    }
    .textTrengding{
      font-family: "DM Sans";
      font-size: 24px;
      font-weight: 700;
      line-height: 31px;
      letter-spacing: 0em;
      text-align: left;
      color: #27242E;
    }
    .headerContent{
      display: flex;
    }
    .textSpan{
      padding: 20px;
      font-family: "DM Sans";
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: #7A797D;
    }
    .divArt{
      background: rgba(84, 41, 255, 0.1);
      height: 28px;
      width: 45px;
      border-radius: 30px;
      padding: 5px 12px 5px 12px;

    }
    .spanArt{
      font-family: "DM Sans";
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: center;
      color: #5429FF;
      margin-top: 7px;
    }
    .rightTopCreator{
      float: right;
      width: 40%;
      height: auto;
    }
    .divCreator{
      height: 478px;
      width: 348px;
      border-radius: 16px;
      background: #FFFFFF;
    }
    .Creator{
      display: flex;
      justify-content: space-around;
      padding: 10px;
    }
    .TopCreator{
      font-family: "DM Sans";
      font-size: 24px;
      font-weight: 700;
      line-height: 31px;
      letter-spacing: 0em;
      color: #27242E;
    }
    .seeAll{
      font-family: "DM Sans";
      font-size: 16px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0em;
      color: #747475;
    }
    .TrendMonkey{
      display: grid;
      grid-template-columns: 0fr 0fr;
      row-gap: 20px;
      column-gap: 60px;
      padding: 10px 60px;
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
            <Trendingg >
              <div className="leftTrending">
                  <div className="topTrending">
                    <div className="textTrengding">
                      Trending Auctions
                    </div>
                    <div className="headerContent">
                      <div className="divArt">
                        <div className="spanArt">Art</div>
                      </div>
                      <div>
                        <span className="textSpan">Music</span>
                        <span className="textSpan">Collectibles</span>
                        <span className="textSpan">Utility</span>
                      </div>
                    </div>
                  </div>
                  <div className="TrendMonkey">
                    <Trending img={Monkey} text={"Ape In Love"} numberLike={"21,5K Likes"}
                      aka={"@johnti60"} imgsmall={IconUser2} textbot={"Current Bid"}
                      imgbot={ImgETH} numberEth={"9.10"} textEth={"ETH"}
                    ></Trending>
                    <Trending img={MonkeyColor} text={"Smilling Ape"} numberLike={"21,5K Likes"}
                      aka={"@m_alisson"} imgsmall={IconUser5} textbot={"Current Bid"}
                      imgbot={ImgETH} numberEth={"6.12"} textEth={"ETH"}
                    ></Trending>
                    <Trending img={Monkey} text={"Ape In Love"} numberLike={"21,5K Likes"}
                      aka={"@j_hawn"} imgsmall={IconUser4} textbot={"Current Bid"}
                      imgbot={ImgETH} numberEth={"8.12"} textEth={"ETH"}
                    ></Trending>
                    <Trending img={MonkeyColor} text={"Ape In Love"} numberLike={"21,5K Likes"}
                      aka={"@teressa"} imgsmall={IconUser3} textbot={"Current Bid"}
                      imgbot={ImgETH} numberEth={"9.99"} textEth={"ETH"}
                    ></Trending>
                  </div>
              </div>
                <div className="rightTopCreator">
                    <div className="divCreator">
                      <div className="Creator">
                        <div className="TopCreator">Top Creator</div>
                        <div className="seeAll">See All</div>
                      </div>
                      <User number={"1."} img={IconUser1} name={"Michael Jordan"} text={"@jordan_"} button={"Follow"}></User>
                      <User number={"2."} img={IconUser2} name={"John Tibao"} text={"@johnti60"} button={"Following"} bgColor={"#5429FF"} textColor={"#FFFFFF"}></User>
                      <User number={"3."} img={IconUser3} name={"Teressa"} text={"@teressa"} button={"Follow"}></User>
                      <User number={"4."} img={IconUser4} name={"Johan Hawn"} text={"@j_hawn"} button={"Follow"}></User>
                      <User number={"5."} img={IconUser5} name={"Maria Alisson"} text={"@m_alisson"} button={"Follow"}></User>
                      <User number={"6."} img={IconUser6} name={"Sam Erricson"} text={"Sam Erricson"} button={"Follow"}></User>
                    </div>
                </div>
            </Trendingg>
          </div>
  
      </header>
    </div>
        </>
    )
}
export default Home;