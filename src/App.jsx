import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import { SignupProvider } from './contexts/SignupContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { PostsProvider } from './contexts/PostsContext';

function App() {
  return (
    <SignupProvider>
      <PostsProvider>
        <Routes>
          <Route
            path='/'
            Component={Signin}
          />
          <Route
            path='/signup'
            Component={Signup}
          />
          <Route
            path='/home'
            Component={Home}
          />
        </Routes>
      </PostsProvider>
    </SignupProvider>
  );
}

export default App;
