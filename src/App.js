import './App.css';
import Navigationbar from './navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navigationbar />
   {process.env.REACT_APP_API_URL}
   </BrowserRouter>
    </>
  );
}

export default App;
