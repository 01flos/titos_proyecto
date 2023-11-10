import React, { useState } from "react"
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Inicio de sesión");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
            </div>
            <div className="inputs">
                {action==="Inicio de sesión"?<div></div>:<div className="input">
                    <input type="text" placeholder="Name"/>
                </div>}
                <div className="input">
                    <input type="input"/>
                    <div className="text_label_usuario">Usuario</div>
                </div>
                <div className="input">
                    <input type="password"/>
                    <div className="text_label_contrasena">Contraseña</div>
                </div>
            </div>
            {action==="Inicio de sesión"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>}
            <div className="submit-container">
                <div className="iniciar-sesion-boton" onClick={()=>{setAction("Sign Up")}}>Ingresar</div>
            </div>
        </div>
    )
}

export default LoginSignup