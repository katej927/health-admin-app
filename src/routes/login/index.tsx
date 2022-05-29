import { MainLogo } from 'assets/svgs';
import { ChangeEvent, useState } from 'react';
import styles from './login.module.scss';
import { Checkbox } from './Checkbox';

const Login = () => {
  // 변수
  const [checkValue, setCheckValue] = useState(false);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckValue((pre) => !pre);
  };

  return (
    <div className={styles.loginWrapper}>
      <header className={styles.header}>
        <MainLogo />
      </header>
      <main className={styles.mainWrapper}>
        <section className={styles.contentWrapper}>
          <h1 className={styles.loginTitle}>로그인</h1>
          <form className={styles.loginContent}>
            <fieldset className={styles.inputWrapper}>
              <label htmlFor='email'>아이디</label>
              <input
                type='text'
                id='email'
                placeholder='아이디를 입력해주세요'
                // value={loginId}
                // onChange={handleEmailChange}
                //   onFocus={handleEmailFocus}
                //   onBlur={handleEmailFocus}
                autoCapitalize='off'
                autoCorrect='off'
                spellCheck='false'
              />
            </fieldset>
            <fieldset className={styles.inputWrapper}>
              <label htmlFor='password'>비밀번호</label>
              <input
                type='text'
                id='password'
                placeholder='비밀번호를 입력해주세요'
                // value={password}
                //   onChange={handleEmailChange}
                //   onFocus={handleEmailFocus}
                //   onBlur={handleEmailFocus}
                autoCapitalize='off'
                autoCorrect='off'
                spellCheck='false'
              />
            </fieldset>
            <fieldset className={styles.checkWrapper}>
              <Checkbox isChecked={checkValue} setIsChecked={setCheckValue} />
              <label htmlFor='rememberInfo'>아이디 저장하기</label>
              <input type='checkbox' id='rememberInfo' onChange={handleCheckbox} checked={checkValue} />
            </fieldset>
            <button type='submit' className={styles.loginButton}>
              로그인하기
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
