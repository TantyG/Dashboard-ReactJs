import styled from "styled-components"

const DivAll = styled.div`
    display: flex;
    justify-content: space-between;
    .DivButton{
        width: 30%;
        text-align: center;
    }
`;
const DivStyle = styled.div`
    display: flex;
    padding: 10px 10px;
    width: 70%;
    .icon{
            height: 44px;
            width: 44px;
            margin-left: 16px;
    }
    
    .number{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        color: #27262E;
        margin-top: 10px;
    }
    .spanText{
        margin-left: 10px;
    }
    .name{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        color: #27262E;
    }
    .text{
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        color: #747475;
    }
       
    
`;
const Button =styled.button`
        height: 32px;
        width: 77px;
        border-radius: 20px;
        padding: 8px 14px 8px 14px;
        background: ${props => props.bgColor};
        color: ${props => props.textColor};
        border: 1px solid transparent;
        text-align: center;
`;
const User = ({number, name, img, text, button, bgColor, textColor}) => {
    return(
        <>
            <DivAll>
                <DivStyle>
                    <span className="number">{number}</span>
                    <img className="icon" src={img} alt="img"></img>
                    <span className="spanText">
                        <div className="name">{name}</div>
                        <div className="text">{text}</div>
                    </span>
                        
                
                </DivStyle>
                    <div className="DivButton">
                        <Button className="button" bgColor={bgColor} textColor={textColor}>{button}</Button> 
                    </div>
                </DivAll>
        </>
    )
}
export {User}
Button.defaultProps = {
    bgColor: 'rgba(84, 41, 255, 0.1)',
    textColor: '#5429FF',
}