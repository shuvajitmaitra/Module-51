import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase.config";

//

export const AuthContext = createContext(null); //step- - - - -1

//

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   create user using context api
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in with context api
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log("this is current user", currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signInUser }; //step - - - - -  3

  return (
    <AuthContext.Provider value={authInfo}>
      {" "}
      {/* step- - - -  2 */}
      {/*  */}
      {children} {/* Step - - = - 4*/}
      {/*  */}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
