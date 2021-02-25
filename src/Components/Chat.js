import React from 'react'
import styled from "styled-components"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
function Chat() {
    return (
      <Container>
        <Header>
          <Channel>
            <ChannelName># Code To Cloud</ChannelName>
            <ChannelInfo>A Beautiful Channel</ChannelInfo>
          </Channel>
          <ChannelDetails>
            <div>Details</div>
            <Info />
              
            
          </ChannelDetails>
        </Header>
        <ChatMessage />
            
        <ChatInput />
      </Container>
    );
}

export default Chat

const Container = styled.div ` 
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const Header = styled.div ` 
   padding-left: 20px;
   padding-right: 20px;
   display: flex;
   align-items: center;
   border-bottom: 1px solid rgba(89, 39, 83,.13);
   justify-content: space-between;
`




 
const Channel = styled.div `

`

const ChannelDetails = styled.div ` 
    display: flex;
    align-items: center;
    position: absolute;
    right: 0; 
    padding-right: 10px;
    color: #606060
`

const ChannelName = styled.div ` 
    font-weight: 700;
    
`

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`