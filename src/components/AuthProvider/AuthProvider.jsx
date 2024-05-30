import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import { auth } from "../../Firebase/Firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  };
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result => console.log(result))
  }

  const authInfo = {
    registerUser,
    loginUser
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
