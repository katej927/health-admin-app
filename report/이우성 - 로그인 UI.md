# 개인 과제 수행 보고서

## 로그인 UI 개발

### 1. 실행화면 
<figure style="text-align: center">
 <img src="https://user-images.githubusercontent.com/42796944/171108561-03e16201-71fa-4e51-a4f5-21f8c65329c1.png" style="display: inline-block; width: 250px; height: 300px;"> 
 <img src="https://user-images.githubusercontent.com/42796944/171108653-8bc93f2d-1ef5-4ce6-9e41-54e2fba79a79.png" style="display: inline-block; width: 250px; height: 300px;">
</figure>

### 2. 기능 구현

 **1. validation**

- 아이디 및 비밀 번호를 미입력시 focus out 및 로그인 버튼을 누를 때 미입력된 요소에 경고 메세지를 요소 하단에 표시한다.
- 미입력된 요소가 있다면 로그인 버튼의 스타일이 활성화되지 않으며 버튼을 누르더라도 요소 하단에 경고 메세지만 표시하고 로그인 요청을 보내지 않는다.
    
    ```tsx
    // src/routes/login/index.tsx
    
    // focus out 시 에러 메세지 표시
    const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
        const {
          currentTarget: { id },
        } = e;
        if (!username && id === 'username') {
          setUsernameAlert(true);
        }
        if (!password && id === 'password') {
          setPasswordAlert(true);
        }
      };
    
    // ...
    
    // 로그인 버튼 입력 시 미입력된 요소 처리 및 로그인 작업 수행
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === '') {
          setUsernameAlert(true);
        }
        if (password === '') {
          setPasswordAlert(true);
        }
        if (password === '' || username === '') {
          return;
        }
        onLogin(username, password, checkValue, onFailHandler, rememberIdHandler);
      };
    
    // ...
    ```
    <br>
    

**2. 아이디 저장하기**

- 아이디 저장하기를 체크하면 로그인 로직을 통해 로그인이 성공했을 때 쿠키를 이용하여 
- 아이디에 저장하기 해제한다면 저장되어 있는 쿠키를 만료시킨다.
    
    ```tsx
    // in src/routes/login/index.tsx
    
    // 아이디 저장 함수
    const rememberIdHandler = (rememberId: string, isRemember: boolean) => {
        if (isRemember) {
          setCookie('usernameCookie', rememberId, {
            days: 7,
          });
        } else {
          setCookie('usernameCookie', '', { days: 0 });
        }
      };
    ```
    
    ```tsx
    // in src/hooks/useLogin.ts
    
    // 로그인 성공 시 아이디 저장 함수 실행
    if (isLoginResult.message !== '로그인 성공!') {
      failHandler(isLoginResult.message);
    } else {
      rememberIdHandler(isLoginResult.name, isRemember);
      // ...		
    }
    ```
    <br>



### test case 

**1. validation**
- 아이디 및 비밀 번호를 미입력시 focus out 시 경고 알림을 보여준다.

- 로그인 버튼을 누를 때 미입력된 요소에 경고 메세지를 요소 하단에 표시한다.
- 미입력된 요소가 있다면 로그인 버튼의 스타일이 활성화되지 않는다.
- 미입력된 요소가 있다면 버튼을 누르더라도 로그인 요청을 보내지 않는다.(로그인 실패에 해당하지만 팝업 요소를 띄우지 않습니다.)

<p style="text-align:center;">
    <img src="https://user-images.githubusercontent.com/42796944/171116969-769cb009-bdd4-434e-9f5d-6a763f4ae8ba.gif" style="width:250px; height: 300px;"/>
</p>

<br>

**2. 아이디 저장하기**
- 아이디 저장하기를 체크하면 로그인이 성공했을 때 쿠키에 해당 아이디를 저장한다.
- 다른 아이디로 새로 로그인 할 경우 쿠키에 저장된 아이디가 있다면 쿠키값을 갱신한다.
- 아이디 저장하기를 해제한다면 저장되어 있는 쿠키를 만료시킨다.

<p style="text-align:center;">
    <img src="https://user-images.githubusercontent.com/42796944/171116918-1abf305e-ece7-4e22-b681-5d8cb53ebea1.gif" style="text-align:center;"/>
</p>

