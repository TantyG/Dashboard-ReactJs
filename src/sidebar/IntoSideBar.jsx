import styled from "styled-components";

const DivSidebar = styled.div`      
        .inSide{
            display: flex;
            width: 100%;
            height: 40px;
            padding: 10px 60px;
        }
        .text{
            font-family: "DM Sans";
            font-size: 16px;
            font-weight: 700;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: ${props => props.colorText};
            margin-left: 15px;
        }
        .icon{
            height: 24px;
            width: 24px;  
        }     
`;

export const IntoSideBar = ({img, text, colorText}) => {
    return (
        <>
        <DivSidebar colorText={colorText}>
            <div className="inSide">
                <img className="icon" src={img} alt="img"></img>
                <div className="text" >{text}</div>
            </div>
        </DivSidebar>
        </>
    )
}