import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        {userObj && (
          <Link to="/profile">
            {userObj.displayName ? userObj.displayName : "유저"} 의 프로필
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Navigation;
