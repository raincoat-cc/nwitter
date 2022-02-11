import { authService } from "fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";

const AuthForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    try {
      if (newAccount) {
        //create Account
        await createUserWithEmailAndPassword(
          authService,
          form.email,
          form.password
        );
      } else {
        //Login
        await signInWithEmailAndPassword(
          authService,
          form.email,
          form.password
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount(prev => !prev);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
    </>
  );
};

export default AuthForm;
