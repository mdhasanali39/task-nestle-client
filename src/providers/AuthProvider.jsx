import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../config/firebase.config";

  // create context 
  export const AuthContext = createContext(null);
  // create google provider instance 
  const googleProvider = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    //   create user
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    //   sign in user
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    //   sign in with google
    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    //   reset password
    const resetPassword = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
    };
  
    //   logged out user
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
    //   update user profile
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
  
    // observer
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log("CurrentUser-->", currentUser);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);
  
    const authInfo = {
      user,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      resetPassword,
      logOut,
      updateUserProfile,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  AuthProvider.propTypes = {
    children:PropTypes.node.isRequired,
  }
  export default AuthProvider;