import React from "react"
import Header from "../components/Header"
import "../assets/styles/Login.scss"
import FormLogin from "../components/FormLogin"
import Footer from "../components/Footer"

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
