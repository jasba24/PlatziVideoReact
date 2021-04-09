import React from "react"
import Header from "../components/Header"
import FormLogin from "../components/FormLogin"
import Footer from "../components/Footer"

import "../assets/styles/Login.scss"

const Login = () => (
	<div>
		<Header />
		<FormLogin
			registerIsTrue
			title="Inicia sesión"
			link="Registrate"
			button="Iniciar sesión"
		/>
		<Footer />
	</div>
)

export default Login
