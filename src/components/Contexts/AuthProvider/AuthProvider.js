import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (name, image, number) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
      phoneNumber: number,
    });
  };
  // const signin
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // signout
  const logOut = () => {
    return signOut(auth);
  };

  const handleGoogleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // all authentication
  const authInfo = {
    createUser,
    updateUser,
    handleGoogleSign,
    logOut,
    user,
    signin,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
