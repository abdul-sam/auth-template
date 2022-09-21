import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.setItem('user', null);
		navigate('/login')
	}
	return(
		<>
			<h1>Welcome Back </h1>
			<button onClick={logout}>Logout</button>
		</>
	)
}
export default Dashboard;