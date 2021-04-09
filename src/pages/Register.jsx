import React from "react"
import FormLogin from '../components/FormLogin';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => (
	<div>
		<Header />
		<FormLogin
			registerIsFalse
			title="Regístrate"
			link="Iniciar sesión"
			button="Registrarme"
		/>
		<Footer />
	</div>
)

export default Register
