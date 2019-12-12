import { useEffect, useState } from "react";
import * as firebase from "firebase";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export function useAuthentication() {
  const [authenticatedUser, setAuthenticatedUser] = useState("loading");
  function login() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth
      .signOut()
      .then(() => {
        //success
      })
      .catch(() => {
        //error
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged(
      user => {
        console.log(user);
        if (user) {
          setAuthenticatedUser(user);
        } else {
          setAuthenticatedUser(null);
        }
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  return { login, loggedIn: authenticatedUser, logout };
}
