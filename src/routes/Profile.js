import { authService, dbService } from "fbase";
import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import React, { useEffect } from "react";

const Profile = ({ userObj }) => {
  const onLogOutClick = () => {
    authService.signOut();
  };

  const getMyNweets = async () => {
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
    );

    const QuerySnapshot = await getDocs(q);
    QuerySnapshot.forEach(doc => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  useEffect(() => {
    getMyNweets();
  }, []);
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
