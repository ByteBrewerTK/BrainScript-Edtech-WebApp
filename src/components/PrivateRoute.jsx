import { Navigate } from "react-router-dom";
export default function PrivateRoute({isLogedIn, children}) {
    
    return isLogedIn ? children : <Navigate to="/login"/>;

}
