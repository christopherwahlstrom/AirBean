import './App.css';

import { Routes, Route } from 'react-router-dom';

import Landing from './views/Landing';
import Menu from './views/Menu';
import About from './views/About';
import Order from './views/Order';

import NavMenu from './components/NavMenu'; //OBS!!! Denna skall till slut bort härifrån, la bara dit den för att kunna bygga den och styla //HE
import Cart from './components/Cart'; //OBS!!! Denna skall till slut bort härifrån, la bara dit den för att kunna bygga den och styla //HE

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/menu' element={ <Menu /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/order' element={ <Order /> }/>
        <Route path='/navmenu' element={ <NavMenu /> }/> //OBS!!! Denna skall till slut bort härifrån, la bara dit den för att kunna bygga den och styla //HE
        <Route path='/cart' element={ <Cart /> }/> //OBS!!! Denna skall till slut bort härifrån, la bara dit den för att kunna bygga den och styla //HE
      </Routes>
    </div>
  );
}

export default App;
