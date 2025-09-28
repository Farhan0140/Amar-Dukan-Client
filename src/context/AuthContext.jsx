import { createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // For Login
  const loginUser = async ( email, password ) => {
    const response = await axios.post("https://amar-dukan.vercel.app/auth/jwt/create/", {
      email: email,
      password: password,
    });

    console.log(response.data);
  };

  return (
    <AuthContext.Provider value={{loginUser}}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext;
