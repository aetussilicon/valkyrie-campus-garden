import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/SIgnup';
import { SignupProvider } from './contexts/SignupContext';

function App() {
  return (
    <SignupProvider>
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
    </SignupProvider>
  );
}

export default App;
