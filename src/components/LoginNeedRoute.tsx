import { Navigate, Outlet } from "react-router-dom";

import { URL } from "../data";

const LoginNeedRoute: React.FC = () => {
  return (!!localStorage.getItem('accessToken')) ? <Outlet /> : <Navigate to={URL.main} />
}

export default LoginNeedRoute;
