import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../Firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase"

function Chat({user}) {

  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
      if(channelId){
          let payload = {
            text: text,
            user: user.name,
            userImage: user.photo,
            timestamp: firebase.firestore.Timestamp.now()
            
          }
          db.collection("Rooms").doc(channelId).collection("Messages").add(payload)
      }
    }

     const getMessages = () => {
        db.collection("Rooms")
        .doc(channelId)
        .collection('Messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          let message = snapshot.docs.map((doc) => doc.data())
          setMessages(message)
        })
      } 
       
      const getChannel = () => {
       db.collection("Rooms")
         .doc(channelId)
         .onSnapshot((snapshot) => {
          setChannel(snapshot.data());
         });
     };

     useEffect(() => {
       getChannel();
       getMessages();
     }, [channelId]);

     return (
      <Container>
        <Header>
          <Channel>
            <ChannelName># { channel && channel.Name }</ChannelName>
            <ChannelInfo>A Beautiful Channel</ChannelInfo>
          </Channel>
          <ChannelDetails>
            <div>Details</div>
            <Info />
          </ChannelDetails>
        </Header>
        <MessageContainer>
            {
                    messages.length > 0 &&
                    messages.map((data)=>(
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                           timestamp={data.timestamp}
                        />
                    ))
                }
        </MessageContainer>    
        <ChatInput sendMessage={sendMessage}/>
      </Container>
    );
    };
export default Chat

const Container = styled.div ` 
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`
const Header = styled.div ` 
   padding-left: 20px;
   padding-right: 20px;
   display: flex;
   align-items: center;
   border-bottom: 1px solid rgba(89, 39, 83,.13);
   justify-content: space-between;
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll; 
`;

 
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