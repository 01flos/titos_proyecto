import React from "react"
import './InicioAdministrador.css'

import menu_icon from '../Assets/menu.png'
import cuentas_icon from '../Assets/cuentas.png'
import registrar_compra_icon from '../Assets/registrar_compra.png'

const InicioAdministrador = () => {
    return (
        <div className="container-administrador">
            <div className="text-administrador">Hola, Administrador</div>
            <div className="menu_img">
                <img src={menu_icon} alt="" />
            </div>
            <div className="texto-img">Menú</div>
            <div className="cuenta-img">
                <img src={cuentas_icon} alt="" />
            </div>
            <div className="texto-img-cuenta">Cuentas</div>
            <div className="compra-img">
                <img src={registrar_compra_icon} alt="" />
            </div>
            <div className="texto-img-compra">Compras</div>
            <div className="cerrar-sesion">
                <div className="cerrar-sesion-boton">Cerrar sesión</div>
            </div>
        </div>
    )
}

export default InicioAdministrador