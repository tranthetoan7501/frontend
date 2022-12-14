import { Routes, Route } from 'react-router-dom';
import Single from './pages/Single';
import Write from './pages/Write';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='post/:id' element={<Single />} />
        <Route path='write' element={<Write />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
