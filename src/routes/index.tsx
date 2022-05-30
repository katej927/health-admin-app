import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './dashboard';
import Layout from './layout';
import Login from './login';
import ManageMember from './manageMember';
import DetailMember from './detailMember';
import { loginState } from 'states/login';
import { useRecoilValue } from 'recoil';

const App = () => {
  const { isLoggedIn } = useRecoilValue(loginState);

  return (
    <Routes>
      <Route path='login' element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
      <Route element={<Layout />}>
        <Route index element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path='manageMember' element={isLoggedIn && <ManageMember />} />
        <Route path='detailMember' element={isLoggedIn && <DetailMember />} />
      </Route>
    </Routes>
  );
};

export default App;
