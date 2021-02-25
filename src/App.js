import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from './Components/Chat';
import Login from './Components/Login';
import styled from "styled-components";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import db from './Firebase'
import { useEffect, useState } from "react";

function App() {

  const [rooms, setRooms] = useState([]);

  const getChannels = () => {
        db.collection('Rooms').onSnapshot((snapshot) => {
          setRooms(snapshot.docs.map((doc) => {
            return { id: doc.id, name: doc.data().Name }
          
        }))
      }) 
  }

  useEffect(() => {
      getChannels(); 
  }, [])

  console.log(rooms);

  return (
    <div className="App">
      <Router>
        <Container>
            <Header />
            <Main>
              <SideBar rooms = {rooms} />
              <Switch>
              <Route path = "/room">
                <Chat />
            </Route>
            <Route path = "//">
                <Login />
            </Route>
          </Switch>
          </Main>
          </Container>
      </Router>
    </div>
  );
}

export default App;
const Main = styled.div `
  display: grid;
  grid-template-columns: 250px auto; 
`

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px auto;
`;


  