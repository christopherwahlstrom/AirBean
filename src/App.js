import './App.css';

import { Routes, Route } from 'react-router-dom';

import Landing from './Views/Landing';
import Menu from './Views/Menu';
import About from './Views/About';
import Order from './Views/Order';

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
