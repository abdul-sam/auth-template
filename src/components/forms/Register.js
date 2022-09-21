import { useEffect, useState } from "react";
import { RegisterValues } from '../../utils/constants'
import { validate } from '../../utils/validate'
import Alert from "../Alert";
import { Link } from 'react-router-dom';

const Register = () => {
  const [formValues, setFormValues] = useState(RegisterValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Make an axios request
      console.log(formValues);
    }
  }, [formErrors]);

  return(
    <form onSubmit={handleSubmit}>
      <div>
      	<label>Username</label>
      	<input 
				  type="text"
				  name="username"
				  placeholder="Username"
				  value={formValues.username}
				  onChange={(e) => handleChange(e)}
				/>
        { formErrors.username &&  <Alert text={formErrors.username}/>}
      </div>
      <div>
        <label>Email</label>
      	<input 
				  type="text"
				  name="email"
				  placeholder="Email"
				  value={formValues.email}
				  onChange={(e) => handleChange(e)}
				/>
				{ formErrors.email &&  <Alert text={formErrors.email}/>}
      </div>
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
        <label>Confirm Password</label>
      	<input 
				  type="password"
				  name="password_confirmation"
				  placeholder="Confirm Password"
				  value={formValues.password_confirmation}
				  onChange={(e) => handleChange(e)}
				/>
				{ formErrors.password_confirmation &&  <Alert text={formErrors.password_confirmation}/>}
      </div>
      <div>
        <input type="submit" value="Sign Up" />
      </div>
      <div>
        Have an account? <Link to="/login"> Login </Link>
      </div>
    </form>
  )
}

export default Register;