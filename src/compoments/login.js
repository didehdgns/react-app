import React from "react";
import "./Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  console.log(props);
  
  return (
    <section className="login">
      <div className="loginContainer">
        <label>아이디</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>비밀번호</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleSignup}>회원가입</button>
              <p>
                이미 계정이 있습니까 ?
                <span onClick={() => setHasAccount(!hasAccount)}>로그인</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleLogin}>로그인</button>
              <p>
                계정이 없으십니까 ?
                <span onClick={() => setHasAccount(!hasAccount)}>회원가입</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
