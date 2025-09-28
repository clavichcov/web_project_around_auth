import { IMAGES } from "../../utils/constants";
import {Header} from '../Header/Header.jsx';
import { Link } from 'react-router-dom';
import { useState } from "react";


export function Register({ handleRegistration}) {
    
        const [data, setData] = useState({
            email: "",
            password: "",
            confirmPassword: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
     };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(data);
    };
    
    return (
        <>  
            <Header></Header>
            <div className="register">
                <div className="register__container">
                    <h2 className="register__title">Regístrate</h2>
                    <form className="register__form" name="loginForm" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            className="register__input"
                            placeholder="Correo electrónico"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            className="register__input"
                            placeholder="Contraseña"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="register__button">Regístrate</button>
                        <p className="login__text">
                            ¿Ya eres miembro? {" "}
                            <Link to="/signin" className="login__text-link">Inicia sesión aquí</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
        
    );
}