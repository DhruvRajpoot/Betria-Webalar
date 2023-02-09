import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Navbarupper from './components/Navbarupper'

const App = () => (
  <BrowserRouter>
    {window.screen.width>756 &&
      <>
        <div className="container" style={{ padding: '.4vw 6vw .2vw 6vw' }}>
          <Navbarupper />
        </div>
        <hr className='mt-0' />
      </>
    }
    <div className="container mt-3" style={{ padding: '0 5vw' }}>
      <Navbar />
    </div>
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
