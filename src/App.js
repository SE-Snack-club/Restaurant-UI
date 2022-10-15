import './App.css';
import Navigationbar from './navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import React, { useEffect } from 'react';
import Chatbott from './chat';
import {Provider} from 'react-redux';
import store from './redux-part/store';
import {useSelector,useDispatch} from 'react-redux';
import { login, logout } from './redux-part/reducers/loginReducer';

function App() {
    //  {process.env.REACT_APP_API_URL}
  

  return (
    <>
<Provider store={store}>
    <BrowserRouter>
    <Navigationbar />
   <div>
      <Chatbott/>
      </div>
   </BrowserRouter>
   </Provider>
    </>
  );
}

export default App;
