import { useRecoilValue } from 'recoil';
import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './login';
import Layout from './layout';
import Dashboard from './dashboard';
import ManageMember from './manageMember';
import DetailMember from './detailMember';
import { loginState } from 'states/login';

const App = () => {
  const { isLoggedIn } = useRecoilValue(loginState);

  return (
    <Routes>
      <Route path='login' element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
      <Route element={<Layout />}>
        <Route index element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path='manageMember' element={isLoggedIn ? <ManageMember /> : <Navigate to='/login' />} />
        <Route path='detailMember' element={isLoggedIn ? <DetailMember /> : <Navigate to='/login' />} />
      </Route>
    </Routes>
  );
};

export default App;
