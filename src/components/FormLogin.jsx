import React from "react"
import "../assets/styles/components/FormLogin.scss"
import googleIcon from "../assets/static/google-icon.png"
import twitterIcon from "../assets/static/twitter-icon.png"

const FormLogin = ({
	title,
	button,
	registerIsFalse,
	registerIsTrue,
	link,
}) => {
	return (
		<section className="login">
			<section className="login__container">
				<h2>{title}</h2>
				<form className="login__container--form">
					{registerIsFalse && (
						<input className="input__login" type="text" placeholder="Name" />
					)}
					<input className="input__login" type="text" placeholder="Correo" />
					<input
						className="input__login"
						type="password"
						placeholder="Contraseña"
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
						No tienes ninguna cuenta
						<a href="">{link}</a>
					</p>
				) : (
					<a className="register__link" href="">{link}</a>
				)}
			</section>
		</section>
	)
}

export default FormLogin
