import React, {useState} from 'react';
import './formvalidation.css'

export default function FormValidation(){
    const intialData = {
        fullname:'',
        email:'',
        gender:'',
        age:'',
        password:'',
        confirmpassword:'',
        acceptedterms: false
    }
    const [formData, setFormData] = useState(intialData);
    const [formErrors, setFormErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    function handleChnage(e){
        const {name, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : e.target.value;
        setFormData((prevData) => (
            {
                ...prevData,
                [name] : inputValue
            }
        ))
    }

    function handleSubmit(e){
        e.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);
        setIsFormSubmitted(true);
    }

    function validateForm(formData){
        const errors={}
        if(!formData.fullname){
            errors.fullname = "Name is required"
        }
        if(!formData.age){
            errors.age= "age is required"
        }
        if (!formData.email) {
            errors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
          }
        if(!formData.acceptedterms){
            errors.acceptedterms ="Please accept terms and condition";
        }
        if(!formData.gender){
            errors.gender="Please selectGender"
        }
        if (!formData.password) {
            errors.password = 'Password is required';
          }
      
          if (formData.password !== formData.confirmPassword) {
            errors.password = 'Passwords do not match';
          }
      
          if (!formData.age) {
            errors.age = 'Age is required';
          } else if (isNaN(formData.age) || +formData.age <= 0) {
            errors.age = 'Invalid age';
          }
      
        return errors;
    }

    return(
        <div className="form-container">
            <h3>Signup Form</h3>
            <form className="form" onSubmit={handleSubmit}>
                <label>FullName:</label>
                <input type="text" name="fullname" placeholder="Full Name.." onChange={handleChnage}/>
                {isFormSubmitted && formErrors.fullname && <span>{formErrors.fullname}</span>}
                <label>Email:</label>
                <input type="text" name="email" placeholder="Email.." onChange={handleChnage}/>
                {isFormSubmitted && formErrors.email && <span>{formErrors.email}</span>}
                <label>Gender:</label>
                <select name="gender" onChnage={handleChnage}> 
                    <option value="male">Male</option>
                    <option value="female">FeMale</option>
                </select>
                {isFormSubmitted && formErrors.gender && <span>{formErrors.gender}</span>}
                <label>Age:</label>
                <input type="number" name="age" placeholder="Age.." onChange={handleChnage}/>
                {isFormSubmitted && formErrors.age && <span>{formErrors.age}</span>}
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password.." onChange={handleChnage}/>
                {isFormSubmitted && formErrors.password && <span>{formErrors.password}</span>}
                <label>ConfirmPassword:</label>
                <input type="password" name="confirmpassword" placeholder="ConfirmPassword.." onChange={handleChnage}/>
                <input type="checkbox" name="acceptedterms" onChange={handleChnage}/> Accept Terms and Conditionss
                 {isFormSubmitted && formErrors.acceptedterms && <span>{formErrors.acceptedterms}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}