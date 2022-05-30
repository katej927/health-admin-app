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
  const tmpLogin = true;

  return (
    <Routes>
      <Route path='login' element={!tmpLogin ? <Login /> : <Navigate to='/' />} />
      <Route element={<Layout />}>
        <Route index element={tmpLogin ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path='manageMember' element={tmpLogin && <ManageMember />} />
        <Route path='detailMember' element={tmpLogin && <DetailMember />} />
      </Route>
    </Routes>
  );
};

export default App;
