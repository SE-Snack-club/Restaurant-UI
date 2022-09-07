import './App.css';
import Navigationbar from './navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navigationbar />
   
   </BrowserRouter>
    </>
  );
}

export default App;
