import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const UserLogin = () => {

  const {loginUser} = useContext(AuthContext);

  return (
    <div>
      <h1>This is Login Page</h1>
      <button onClick={() => loginUser("admin@gmail.com", "admin")}>Click me for megic</button>
    </div>
  );
};

export default UserLogin;