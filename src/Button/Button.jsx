import styled from "styled-components";
import greenArrow from "asset/green-arrow.png";
import redArrow from "asset/red-arrow.png";
const Buton = styled.button`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border-radius: ${props => `${props.bdRa}px`};
    border: ${props => props.borderColor  ? `1px solid ${props.borderColor}` : `none`};
    background: ${props => props.bgColor};
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: ${props => props.textColor};
    margin-left: ${props => `${props.marLeft}px`};
    img{
        margin-right: 8px;
    }
`;

export const Button = ({bdRa, marLeft, width, height, textColor, bgColor, borderColor, btnText, children, ...rest}) => {
    return <Buton btnText={btnText} 
    {...rest}
    width={width}
    height={height}
    textColor={textColor}
    bgColor={bgColor}
    borderColor={borderColor}
    marLeft={marLeft}
    bdRa={bdRa}
    >
        {btnText && <img src={btnText < 0 ? redArrow : greenArrow} alt="arr"></img>}
        {children}
        </Buton>;
}
Button.defaultProps = {
    bgColor: '#FFFFF',
    textColor: '#5429FF',
    width: 128,
    height: 46,
    bdRa: 12,
}

 