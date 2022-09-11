import React from 'react';
import {FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <List>
        <SLink to = {'/cuisine/Italian'} >
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to = {'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to = {'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to = {'/cuisine/Asian'}>
            <GiChopsticks />
            <h4>Asian</h4>
        </SLink>
        
    </List>
  )
}

const List = styled.div `
    //background-color : yellow;
    display : flex;
    justify-content : center;
    margin : 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    border-radius : 50%;
    text-decoration : none;
    margin-right : 2rem;
    background : linear-gradient(35deg, #494949, #313131);
    width : 6rem;
    height : 6rem;
    transform : scale(0.8);

    h4{
        color : white;
        font-size : 0.8rem;
    };
    svg{
        color : white;
        font-size : 1.5rem;
    };

    &.active{
        background : linear-gradient(35deg, red, orange);
    }
`

export default Category;