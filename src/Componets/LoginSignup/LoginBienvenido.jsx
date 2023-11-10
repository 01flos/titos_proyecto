import React from "react"
import './LoginBienvenido.css'

import logo_icon from '../Assets/logo_titos_proyecto.png'

const LoginBienvenido = () => {
    return (
        <div className="container-bienvenido">
            <div className="text-bienv">Bienv</div>
            <div className="logo-img-bienvenido"><img src={logo_icon} alt="" /></div>
            <div className="text-nido">nido</div>
        </div>
    )
}

export default LoginBienvenido