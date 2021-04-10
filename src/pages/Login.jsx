import React from "react"
import {connect} from "react-redux"
import FormLogin from "../components/FormLogin"

import "../assets/styles/Login.scss"

const Login = () => (
	<>
		<FormLogin
			registerIsTrue
			title="Inicia sesión"
			link="Registrate"
			button="Iniciar sesión"
		/>
	</>
)

export default connect(null, null)(Login)
