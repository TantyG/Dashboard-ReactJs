import styled from "styled-components";
import { Button } from "Button";
import ethIcon from "asset/eth-blue.png";
const Div = styled.div` 
    padding: 24px;
    width: 164px;
    height: 167px;
    border-radius: 20px;
    background: #FFFF;
    font-family: DM Sans;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #747475;
    .title{
        color: #747475;
        margin-bottom: 25px;
        font-family: "DM Sans";
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

    }
    .amount{
        font-family: "DM Sans";
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color: #27262E;
    }
    .amount-wrapper{
        margin-bottom: 25px;
        text-align: center;
    }
    .icon{
        
    }
`;

export const Card = ({title, amount, content, percent})=> {
    return (
        <>
        <Div>
            <div className="title">{title}</div>
            {   amount ?
                <div className="amount-wrapper">
                <img className="icon" src={ethIcon} alt="" /> 
                &nbsp;
                <span className="amount">{amount}</span>&nbsp; ETH
                </div>
            :
                <div>
                {content}
                </div>
            }
            <Button marLeft={20} btnText={"10"} borderColor="">{percent}%</Button>
        </Div>
        </>
    )
}