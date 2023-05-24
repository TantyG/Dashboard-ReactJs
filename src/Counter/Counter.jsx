import React from "react";

import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    color: #BF4F74;
    font-size: 1.5em;
`;

const StyledTitle = styled(Title)`
    color  : #07de93;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #d5f2ff;
  span{
    color: ${props => props.count > 5 ? "green" : "#BF4F74"} ;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
export class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0, loading: true};
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
        setTimeout(()=>{this.setState({loading:false});}, 2000  )
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    onDecrease = () => {
        this.setState({count: this.state.count-1})
    }
    onIncrease = () => {
        this.setState({count: this.state.count+1})
    }
    render(){
        console.log("renderrrr")
        return(
            <div>
                {
                    this.state.loading ? <p>Loading...</p> :
                    <>
                        <Wrapper count={this.state.count}>
                            <Title>{this.props.name}</Title>
                            
                            <button onClick={()=> this.onDecrease()}>-</button>
                            <span>{this.state.count}</span>
                            <button onClick={()=> this.onIncrease()}>+</button>
                        </Wrapper>
                        <StyledTitle></StyledTitle>
                        
                    </>
                }
            </div>
        )
    }
}
 