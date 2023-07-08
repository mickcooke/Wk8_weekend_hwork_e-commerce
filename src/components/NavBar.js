import styled from 'styled-components';
import React from "react";
import {Link} from "react-router-dom";

const NavBarContainer = styled.div`
display: flex;
justify-content: space-around;
background-color: black;
padding: 0px;
`
const NavText = styled.p`
color: white;
text-decoration: None;
`

const NavBar = ({basket}) => {
  
    return (
        <NavBarContainer>
            <span>
                <Link to= "/"><NavText>Products</NavText></Link>
            </span>
            <span>
                <Link to= "/basket"><NavText>Cart ({basket.length})</NavText></Link>
            </span>
            </NavBarContainer>
       

    )
}
export default NavBar;