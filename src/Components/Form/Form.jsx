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

    const datosIngresados = (event) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const preventR = (event) =>{
        event.preventDefault();
        const data=document.querySelector(".dataShow");
        data.classList.add("dataOn")
    }

    return (
        <form>
        <div className="form">
            <div className="firstName">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id='firstName' value={formData.firstName} onChange={datosIngresados}/>
            </div>
            <div className="lastName">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id='lastName' value={formData.lastName} onChange={datosIngresados}/>
            </div>
            <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' value={formData.email} onChange={datosIngresados}/>
            </div>
            <div className="password">
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={formData.password} onChange={datosIngresados}/>
            </div>
            <div className="cPassword">
            <label htmlFor="confirmPassword">{"Confirm Password:"} </label>
            <input type="password" id='confirmPassword' value={formData.confirmPassword} onChange={datosIngresados}/>
            </div>
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