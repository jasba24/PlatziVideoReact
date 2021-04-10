import React from "react"
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

export default Login
