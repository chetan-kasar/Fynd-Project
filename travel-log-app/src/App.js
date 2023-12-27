import './App.css';
import Home from './Components/Home';
import Journeys from './Components/Journeys';
import CreateJourney from './Components/CreateJourney';
import Navbar from './Components/Navbar';
import UserContent from './Components/UserContent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [userData, setUserData] = useState({});
  const cardClick = (ele)=>{
    setUserData(ele);
  }

  useEffect(() => {}, []);

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar/><Home/><Journeys cardClick={cardClick}/></>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/createjourney" element={<><Navbar/><CreateJourney/></>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/usercomponent" element={
          <>
          <Navbar/>
          <UserContent userData={userData}/>
          </>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
