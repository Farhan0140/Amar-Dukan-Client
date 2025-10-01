import { Navigate } from "react-router";
import useAuthContext from "../Hooks/useAuthContext";


const PrivateRoute = ({ children }) => {
  
  const {user} = useAuthContext();

  if(user === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-9xl font-biscotti">Loading....</h1>
      </div>
    )
  }

  return user ? children : <Navigate to={"/sign-in"}></Navigate>;
};

export default PrivateRoute;