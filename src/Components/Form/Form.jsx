/* 
TO DO LIST:


--Crear validaciones para contraseña y confirmar contraseña 

*/



import React,{useState} from 'react';
import './Form.css'
const Form = () =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        return re.test(String(password));
    };

    const datosIngresados = (event) => {
        const { id, value } = event.target;

        switch (id) {
            case 'firstName':
                setErrors((prevState) => ({
                    ...prevState,
                    firstName: value.length === 0 ? 'This field is required' : value.length < 3 ? 'Must be at least 2 characters' : ''
                }));
                break;
            case 'lastName':
                setErrors((prevState) => ({
                    ...prevState,
                    lastName: value.length === 0 ? 'This field is required' : value.length < 3 ? 'Must be at least 2 characters' : ''
                }));
                break;
            case 'email':
                setErrors((prevState) => ({
                    ...prevState,
                    email: value.length === 0 ? 'This field is required' : !validateEmail(value) ? 'Invalid email address' : ''
                }));
                break;
            case 'password':
                setErrors((prevState) => ({
                    ...prevState,
                    password: value.length === 0 ? 'This field is required' : !validatePassword(value) ? 'Password must be at least 6 characters long and contain at least one special character' : ''
                }));
                break;
            case 'confirmPassword':
                setErrors((prevState) => ({
                    ...prevState,
                    confirmPassword: value !== formData.password ? 'Passwords do not match' : ''
                }));
                break;
            default:
                break;
        }

        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };
    return (
        <form>
        <div className="form">
            <div className="firstName">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id='firstName' value={formData.firstName} onChange={datosIngresados}/>
            </div>

            <span className="error">{errors.firstName}</span>

            <div className="lastName">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id='lastName' value={formData.lastName} onChange={datosIngresados}/>
            </div>

            <span className="error">{errors.lastName}</span>

            <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' value={formData.email} onChange={datosIngresados}/>
            </div>

            <span className="error">{errors.email}</span>

            <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={formData.password} onChange={datosIngresados}/>
            </div>

            <span className="error">{errors.password}</span>
            
            <div className="cPassword">
            <label htmlFor="confirmPassword">{"Confirm Password:"} </label>
            <input type="password" id='confirmPassword' value={formData.confirmPassword} onChange={datosIngresados}/>
            </div>
            <span className="error">{errors.confirmPassword}</span>
            <div className="dataShow">
                <div className="titleData">
                <span><b>Your Form Data</b></span>
                </div>
                <span>First Name: {formData.firstName}</span>
                <span>Last Name: {formData.lastName}</span>
                <span>Email: {formData.email}</span>
                <span>Password:{formData.password}</span>
                <span>Confirm Password:{formData.confirmPassword}</span>
            </div>
        </div>
        </form>
    )
}


export default Form