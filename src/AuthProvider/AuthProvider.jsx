import { createContext } from "react";
import PropTypes from "prop-types";

//

export const AuthContext = createContext(null); //step- - - - -1

//

const AuthProvider = ({ children }) => {
  const authInfo = { intro: "hello, this is me" }; //step - - - - -  3
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
