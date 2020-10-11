import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdGames } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import "./Navigation.css";
import fire from "./fire";

const Navigation = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const cleaerInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        cleaerInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <div>
      <div className="header">
        <ul className="headerleft">
          <li>
            <Link to="/">
              <MdGames className="mdgames" />
            </Link>
          </li>
          <li>
            <Link to="/">GAMEGO!</Link>
          </li>
        </ul>

        <ul className="headerright">
          <li>
            <VscSearch className="vscsearch" />
            <input type="text" placeholder="원하는 게임을 입력하세요" />
          </li>
          {user ? (
            <ul>
              <li handleLogout={handleLogout}>로그아웃</li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link
                  to="/Login"
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                >
                  로그인
                </Link>
              </li>
              <li>
                <Link
                  to="/Registor"
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                >
                  회원가입
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
