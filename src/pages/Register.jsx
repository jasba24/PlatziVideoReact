import React from "react"
import FormLogin from "../components/FormLogin"

const Register = () => {
	return (
		<>
			<FormLogin
				registerIsFalse
				title="Regístrate"
				link="Iniciar sesión"
				button="Registrarme"
			/>
		</>
	)
}

export default Register
