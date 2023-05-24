import { Card } from "Card";
import { SideBar } from "sidebar";
import "../Home/Home.css";
import Header from "Header";
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
            <div className="Card">
              <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
              <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
              <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
              <Card title={"Revenue"} amount={"5.00"} percent={12.3}></Card>
            </div>
          </div>
  
      </header>
    </div>
        </>
    )
}
export default Home;