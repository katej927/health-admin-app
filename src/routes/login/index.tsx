import { ChangeEvent, useState } from 'react';

import { Checkbox } from './Checkbox';
import { MainLogo } from 'assets/svgs';
import Popup from 'components/popup';
import { cx } from 'styles';
import styles from './login.module.scss';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const onLogin = useLogin();
  const [checkValue, setCheckValue] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [popupMessage, setPopupMessage] = useState<string>('');
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUsername(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setPassword(value);
  };

  const onFailHandler = (message: string) => {
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const handleCheckbox = () => {
    setCheckValue((pre) => !pre);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password, onFailHandler);
  };

  return (
    <div className={styles.loginWrapper}>
      <Popup message={popupMessage} open={popupOpen} setOpen={setPopupOpen} status='error' />
      <header className={styles.header}>
        <MainLogo />
      </header>
      <main className={styles.mainWrapper}>
        <section className={styles.contentWrapper}>
          <h1 className={styles.loginTitle}>로그인</h1>
          <form onSubmit={handleSubmit} className={styles.loginContent}>
            <fieldset className={styles.inputWrapper}>
              <label htmlFor='email'>아이디</label>
              <input
                type='text'
                id='email'
                placeholder='아이디를 입력해주세요'
                value={username}
                onChange={handleUsernameChange}
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                spellCheck='false'
              />
            </fieldset>
            <fieldset className={styles.inputWrapper}>
              <label htmlFor='password'>비밀번호</label>
              <input
                type='password'
                id='password'
                placeholder='비밀번호를 입력해주세요'
                value={password}
                onChange={handlePasswordChange}
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                spellCheck='false'
              />
            </fieldset>
            <fieldset className={styles.checkWrapper}>
              <Checkbox isChecked={checkValue} setIsChecked={setCheckValue} />
              <label htmlFor='rememberInfo'>아이디 저장하기</label>
              <input type='checkbox' id='rememberInfo' onChange={handleCheckbox} checked={checkValue} />
            </fieldset>
            <button type='submit' className={cx(styles.loginButton, { [styles.buttonValid]: username && password })}>
              로그인
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
