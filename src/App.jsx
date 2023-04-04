import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      {/* <Route exact path='/login' element={<Login/>}></Route> */}
    </Routes>
  </BrowserRouter>
);

export default App;
