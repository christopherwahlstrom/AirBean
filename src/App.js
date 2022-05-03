import './App.css';

import { Routes, Route } from 'react-router-dom';

import Landing from './views/Landing';
import Menu from './views/Menu';
import About from './views/About';
import Order from './views/Order';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/menu' element={ <Menu /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/order' element={ <Order /> }/>
      </Routes>
    </div>
  );
}

export default App;
