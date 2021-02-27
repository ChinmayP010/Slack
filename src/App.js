import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from './Components/Chat';
import Login from './Components/Login';
import styled from "styled-components";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import db from './Firebase'
import { useEffect, useState } from "react";
import { auth } from "./Firebase";

function App() {

  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
        db.collection('Rooms').onSnapshot((snapshot) => {
          setRooms(snapshot.docs.map((doc) => {
            return { id: doc.id, name: doc.data().Name }
          
        }))
      }) 
  }
  
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
      getChannels(); 
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ? (
            <Login setUser = {setUser}/>
          
        ) : (
          <Container>
            <Header user={user} signOut = {signOut}/>
            <Main>
              <SideBar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user}/>
                </Route>
                <Route path="/"> 
                    <b>Select Or Create Channel</b>
                </Route>
              </Switch>
            </Main>
          </Container>
        )}
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
  grid-template-rows: 30px minmax(0, 1fr);
`;


  