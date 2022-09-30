import './App.css';
import Navigationbar from './navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Chatbott from './chat';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigationbar />
   {process.env.REACT_APP_API_URL}
   <div>
      <Chatbott/>
      </div>
   </BrowserRouter>
    </>
  );
}

export default App;
