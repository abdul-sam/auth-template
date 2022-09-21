import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const u = localStorage.getItem('user');
  const token = u && JSON.parse(u) ? JSON.parse(u).token : null
  return(
  	token ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;