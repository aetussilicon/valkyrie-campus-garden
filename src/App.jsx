import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/SIgnup';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        Component={Signin}
      />
      <Route
        path='/signup'
        Component={Signup}
      />
    </Routes>
  );
}

export default App;
