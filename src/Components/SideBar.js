 import React from 'react';
 import styled from "styled-components";
 import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
 import {sideBarItems} from "../Data/SideBarData";
 import AddIcon from "@material-ui/icons/Add";
 import db from "../Firebase" 
 import { useHistory } from "react-router-dom";

 function SideBar(props) {
    const history = useHistory();

     const addChannel = () => {
         const promptName = prompt("Enter Channel Name")
         if(promptName){
             db.collection('Rooms').add({
                 Name: promptName
             })
         }
    }

    const goToChannel = (id) => {
      if(id){
          history.push(`/room/${id}`)
      }
    }

    return (
      <Container>
        <WorkSpace>
          <Name>Code To Cloud</Name>
          <NewMessage>
            <AddCircleOutlineIcon />
          </NewMessage>
        </WorkSpace>
        <MainChannels>
          {sideBarItems.map((item) => (
            <MainChannelsItem>
              {item.icon}
              {item.text}
            </MainChannelsItem>
          ))}
        </MainChannels>
        <ChannelsContainer>
          <NewChannelsContainer>
            <div>Channel</div>
            <AddIcon onClick = {addChannel}/>
          </NewChannelsContainer>
          <ChannelsList>
            {props.rooms.map((item) => (
              <Channel onClick = {() => {
                goToChannel(item.id)}}> 
              # {item.name}
              </Channel>
            ))}
          </ChannelsList>
        </ChannelsContainer>
      </Container>
    ); 
}

export default SideBar

const Container = styled.div ` 
    background: #3F0E40;
`

const WorkSpace = styled.div `
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div `

 `
const NewMessage = styled.div `
    width: 36px;
    height: 36px;
    color: #3F0E40;
    fill: #3F0E40;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`
const MainChannels = styled.div `
    padding-top: 20px;
`

const MainChannelsItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
const ChannelsContainer = styled.div `
    color: rgb(188, 171, 188);
    margin-top: 10px;
`

const NewChannelsContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div ` 

`

const Channel = styled.div `
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`