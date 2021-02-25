import React from 'react'
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search.." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Chinmay Prashanth
                </Name>
                <UserImage>
                    <img src="" alt = ""/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header;
const SearchContainer = styled.div `
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`;

const Search = styled.div `
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 4px;
        padding-bottom: 8px;
    }

    input:focus {
        outline: none;
    }

`;


const Main = styled.div `
    margin-right: 16px;
    margin-left: 16px;
    display: flex;
`;

const Name = styled.div `
    padding-right: 16px;
`;

const UserImage = styled.div `
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
`

const UserContainer = styled.div `
    display: flex;
    align-items: center;
    padding-right: 16px;
    
    img {
        width: 100%
    }
    position: absolute;
    right: 0;
`;

const Container = styled.div `
    background: #350d36;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    position:: relative;
`;

