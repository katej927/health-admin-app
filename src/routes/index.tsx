import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './dashboard';
import Layout from './layout';
import Login from './login';
import { loginState } from 'states/login';
import { useRecoilValue } from 'recoil';
import DetailMember from './detailMember';

const App = () => {
  // const { isLoggedIn } = useRecoilValue(loginState);
  const isLoggedIn = true;
  return (
    <Routes>
      <Route path='/login' element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
      <Route element={<Layout />}>
        <Route index element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />} />
        {/* <Route path=':id' element={isLoggedIn ? <Login /> : <Detail />} /> */}
        <Route path='/detail' element={<DetailMember />} />
      </Route>
    </Routes>
  );
};

export default App;
