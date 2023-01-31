import './App.css';
import { useState } from 'react';
import FrstPage from './containers/FrstPage';
import Header from './containers/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" // библиотека позволяющая переключать между станицами, определяет какой пусть сейчас в строке и отрисовывает нужный компонент
import ProcuctListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import { useSelector } from 'react-redux';

function App() {
const valueCity = useSelector((state) => state.city)


const handleButtonCity = (value) => { 
  console.log(value)
 }
  return (
      <div className="App">
      <Router>
        <Header/>
        {
          valueCity ?
        <Routes>
          <Route path='/' exact element ={<ProcuctListing/>}/>
          <Route path="/product/:productId" exact element={<ProductDetail/>}/>
          <Route>404 Not Found!</Route>
        </Routes> 
          :
        <FrstPage handleButtonCity={handleButtonCity}/> 

        }
      </Router>
      </div>
  );
}

export default App;
