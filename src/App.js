import { Routes, Route } from 'react-router-dom';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import Homepage from './pages/homepage/Homepage';
import ProtectedRoutes from './protectRoute';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Homepage />} />
          <Route path='post/:id' element={<Single />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='write' element={<Write />} />
          </Route>
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
