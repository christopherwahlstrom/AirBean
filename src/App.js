import './App.css';

import { Routes, Route } from 'react-router-dom';

import Landing from './views/Landing';
import Menu from './views/Menu';
import About from './views/About';
import Order from './views/Order';
import { useState, useEffect } from 'react';

function App() {

  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function getMenu() {
        const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu');
        const data = await response.json();
        setMenu(data);
      }
      getMenu();
  }, []);

  useEffect(() => {
    async function getOrder() {
        const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order');
        const data = await response.json();
        setOrder(data);
      }
      getOrder();
  }, []);



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/menu' element={ <Menu menu={ menu }/> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/order' element={ <Order order={ order }/> }/>
      </Routes>
    </div>
  );
}

export default App;
