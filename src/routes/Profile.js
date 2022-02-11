import { authService } from "fbase";
import { updateProfile } from "@firebase/auth";
import React, { useState } from "react";

const Profile = ({ userObj }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
  };
  const onChange = event => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setNewDisplayName(value);
  };
  const onSubmit = async event => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, { displayName: newDisplayName });
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          defaultValue={newDisplayName}
          onChange={onChange}
        />
        <input type="submit" value={"Update Profile"} />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
