import styled from "styled-components";


const DivStyled = styled.div`
    height: 364px;
    width: 348px;
    border-radius: 16px;
    background: #FFFFFF;
    .monkey{
        padding: 10px 0px;
        opacity: 1;
        display: block;
        height: 196px;
        width: 324px;
        border-radius: 12px;
        transition: .5s ease;
        backface-visibility: hidden
    }
    .Name{
        display: flex;
        justify-content: space-around;
    }
    .text{
        font-family: "DM Sans";
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color: #27262E;
    }
    .numberLike{
        font-family: DM Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: right;
        color: #747475;
    }   
    .small{
        padding: 10px 2px;
        display: flex;
    }
    .imgsmall{
        height: 28px;
        width: 28px;

    }
    .aka{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #747475;
        margin-left: 10px;
    }
    .end{
        display: flex;
        justify-content: space-around;
        padding: 10px;
    }
    .imgbot{
        height: 20px;
        width: 20px;
        padding: 3px;
    }
    .textbot{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #747475;
    }
    .numberEth{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: right;
        color: #27262E;
    }
    .textEth{
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: right;
        color: #747475;
    }
    .imgNumber{
        display: flex;
    }
    .divEth{
        display: flex;
    }
    .container {
        position: relative;
        width: 50%;
        transform: translate(12px, 10px);
        }
    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(10%, -35%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }
    .container:hover .image {
        opacity: 0.3;
    }

    .container:hover .middle {
        opacity: 1;
    }

    .textt{
        width: 144px;
        height: 46px;
        left: 102px;
        top: 87px;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 40px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #5429FF;
    }
`;
const Trending = ({img, text, numberLike, imgsmall, aka, textbot, imgbot, textEth, numberEth}) =>{
    return(
        <>
            <DivStyled>
                <div class="container">
                    <img className="monkey" src={img} alt="monkey" />
                    <div class="middle">
                      <button class="textt">Place a Bid</button>
                    </div>
                  </div>
                <div className="Name">
                    <div>
                        <div className="text">{text}</div>
                        <div className="small">
                            <div>
                                <img className="imgsmall" src={imgsmall} alt="" />
                            </div>
                            <div className="aka">{aka}</div>
                        </div>
                    </div>
                    <div className="numberLike">{numberLike}</div>
                </div>
                <div className="end">
                    <div className="textbot">
                        {textbot}
                    </div>
                    <div className="imgNumber">
                        <div>
                            <img className="imgbot" src={imgbot} alt="" />
                        </div>
                        <div className="divEth">
                            <div className="numberEth">{numberEth}</div>
                            <div className="textEth">{textEth}</div>
                        </div>
                    </div>
                </div>
            </DivStyled>
        </>
    )
}
export {Trending}