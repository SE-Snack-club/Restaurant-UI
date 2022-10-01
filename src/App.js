import './App.css';
import Navigationbar from './navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';


function App() {
    //  {process.env.REACT_APP_API_URL}
  return (
    <>
    <BrowserRouter>
    <Navigationbar />

   </BrowserRouter>
    </>
  );
}

export default App;
