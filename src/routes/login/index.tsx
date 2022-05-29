import Popup from 'components/popup';
import styles from './login.module.scss';
import { useState } from 'react';

const Login = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <button type='button' onClick={handleClick}>
        로그인
      </button>
      <Popup
        message='로그인을 성공하였습니다.'
        open={open}
        setOpen={setOpen}
        // subMessage='가입 또는 다시 시도해 주세요'
        // position='top left'
        status='success'
      />
      <Popup
        message='아이디 또는 패스워드가 정확하지 않습니다.'
        open={open}
        setOpen={setOpen}
        // subMessage='가입 또는 다시 시도해 주세요'
        position='bottom right'
        status='error'
      />
      <Popup
        message='하위하위하위하위하위'
        open={open}
        setOpen={setOpen}
        subMessage='가입 또는 다시 시도해 주세요'
        position='bottom left'
        status='info'
      />
      <Popup
        message='나는 정규재입니다.'
        open={open}
        setOpen={setOpen}
        // subMessage='가입 또는 다시 시도해 주세요'
        position='top left'
        status='info'
      />
    </div>
  );
};

export default Login;
