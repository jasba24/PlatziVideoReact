import React, { useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import { loginRequest } from "../actions"
import googleIcon from "../assets/static/google-icon.png"
import twitterIcon from "../assets/static/twitter-icon.png"

const FormLogin = props => {
	const { title, button, registerIsFalse, registerIsTrue, link } = props
	const [form, setValues] = useState({
		email: "",
		name: "",
	})

	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		props.loginRequest(form)
		props.history.push("/")
	}

	return (
		<section className="login">
			<section className="login__container">
				<h2>{title}</h2>
				<form className="login__container--form" onSubmit={handleSubmit}>
					{registerIsFalse && (
						<input
							className="input__login"
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleInput}
						/>
					)}
					<input
						className="input__login"
						type="text"
						placeholder="Correo"
						name="email"
						onChange={handleInput}
					/>
					<input
						className="input__login"
						type="password"
						placeholder="Contraseña"
						name="password"
						onChange={handleInput}
					/>
					<button className="button__login">{button}</button>
					{registerIsTrue && (
						<div className="login__container--remember-me">
							<label>
								<input type="checkbox" id="cbox1" value="first_checkbox" />
								Recuérdame
							</label>
							<a href="/">Olvidé mi contraseña</a>
						</div>
					)}
				</form>
				{registerIsTrue && (
					<section className="login__container--social-media">
						<div>
							<img src={googleIcon} /> Inicia sesión con Google
						</div>
						<div>
							<img src={twitterIcon} /> Inicia sesión con Twitter
						</div>
					</section>
				)}

				{registerIsTrue ? (
					<p className="login__container--register">
						No tienes ninguna cuenta <Link to="/register">{link}</Link>
					</p>
				) : (
					<Link className="register__link" to="/login">
						{link}
					</Link>
				)}
			</section>
		</section>
	)
}

FormLogin.propTypes = {
	title: PropTypes.string,
	button: PropTypes.string,
	link: PropTypes.string,
}

const mapDispatchToProps = {
	loginRequest,
}

export default withRouter(connect(null, mapDispatchToProps)(FormLogin))
