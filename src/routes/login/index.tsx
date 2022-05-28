import { useLogin } from '../../hooks/useLogin';

import styles from './login.module.scss';

const Login = () => {
  const onLogin = useLogin();

  const onFailHandler = (message: string) => {
    // TODO: 여기서 로그인 실패 했을 때, 처리 하면 될 것 같아요!
    // TODO: 실패 내역은 메세지로 출력됩니다. 상세 내역은 PR 확인!
    console.log(message);
  };

  return (
    <div className={styles.wrapper}>
      <button type='button' onClick={() => onLogin('solchan', '1', onFailHandler)}>
        로그인
      </button>
    </div>
  );
};

export default Login;
