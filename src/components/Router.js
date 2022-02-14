import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <HashRouter base="/">
      {isLoggedIn && <Navigation userObj={userObj} />}
      <div
        style={{
          maxWidth: 320,
          width: "100%",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home userObj={userObj} />}></Route>
              <Route
                path="/profile"
                element={
                  <Profile userObj={userObj} refreshUser={refreshUser} />
                }
              ></Route>
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Auth />}></Route>
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </HashRouter>
  );
};
export default AppRouter;
