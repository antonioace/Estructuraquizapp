import { signOut } from "firebase/auth";
import React from "react";
import { FirebaseAuth } from "../config/firebase";

function useLogout() {
  const deslogear = () => {
    signOut(FirebaseAuth)
      .then(() => {
        // Sign-out successful.
        console.log("deslogear");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return {
    deslogear,
  };
}

export default useLogout;
