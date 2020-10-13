import React, {useState, useEffect} from "react";
import Login from './Login';
import fire from './fire'
import {Redirect} from 'react-router'

const Registor = () => {
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
  if (user) {
    return <Redirect to="/" />;
  }
  return <Login email={email}
  setEmail={setEmail}
  password={password}
  setPassword={setPassword}
  handleLogin={handleLogin}
  handleSignup={handleSignup}
  hasAccount={hasAccount}
  setHasAccount={setHasAccount}
  emailError={emailError}
  passwordError={passwordError}/>
};

export default Registor;
