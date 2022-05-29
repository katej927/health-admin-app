import { useRecoilValue } from 'recoil';
import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './login';
import Layout from './layout';
import Dashboard from './dashboard';
import { loginState } from 'states/login';

const App = () => {
  const { isLoggedIn } = useRecoilValue(loginState);
  //   const isLoggedIn = true;
  return (
    <Routes>
      <Route path='/login' element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
      <Route element={<Layout />}>
        <Route index element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />} />
        {/* <Route path=':id' element={isLoggedIn ? <Login /> : <Detail />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
