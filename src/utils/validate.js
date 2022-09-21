const validate = (values) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  
  Object.keys(values).map((key) => {
    if (key === 'email'){
      if (!values[key]) {
        errors.email = "Email is required!";
      } else if (!emailRegex.test(values[key])) {
        errors.email = "Invalid email!";
      }
    }
    if(key === 'phone'){
      if (!values[key]) {
        errors.phone = "Phone is required!";
      } if(!phoneRegex.test(values[key])){
        errors.phone = "Invalid phone!";
      }
    }
    if(key !== 'phone' || key !== 'email'){
      if (!values[key]) {
        errors[key] = `${key} is required`;
      }
    }
  })
  
  return errors;
};

export { 
  validate
}