import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { LoginValues } from '../../utils/constants'
import { validate } from '../../utils/validate'
import Alert from "../Alert";

const Login = () => {
  const [formValues, setFormValues] = useState(LoginValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem('user', JSON.stringify({token: true}));
    	navigate('/dashboard');
    }
  }, [formErrors]);

  return(
    <form onSubmit={handleSubmit}>
      <div>
      	<label>Phone</label>
      	<input 
				  type="text"
				  name="phone"
				  placeholder="Phone"
				  value={formValues.phone}
				  onChange={(e) => handleChange(e)}
				/>
        { formErrors.phone &&  <Alert text={formErrors.phone}/>}
      </div>
      <div>
        <label>Password</label>
      	<input 
				  type="password"
				  name="password"
				  placeholder="Password"
				  value={formValues.password}
				  onChange={(e) => handleChange(e)}
				/>
				{ formErrors.password &&  <Alert text={formErrors.password}/>}
      </div>
      <div>
        <input type="submit" value="Sign in" />
      </div>
      <div>
        <Link to="/register"> Register </Link>
      </div>
    </form>
  )
}

export default Login;