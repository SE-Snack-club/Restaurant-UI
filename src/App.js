import './App.css';
import Navigationbar from './navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Chatbott from './chat';
import Inventory from "./components/inventory/inventory";

function App() {
    //  {process.env.REACT_APP_API_URL}
    return (
      <>
      <BrowserRouter>
      <Navigationbar />
     <div>
        <Chatbott/>
        </div>
     </BrowserRouter>
      </>
    );
  }

export default App;
