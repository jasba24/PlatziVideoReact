import React from "react"
import { connect } from "react-redux"
import gravatar from "../utils/gravatar"
import { Link } from "react-router-dom"
import logo from "../assets/static/logo-platzi-video-BW2.png"
import userIcon from "../assets/static/user-icon.png"

const Header = props => {
	const { user } = props
	const hasUser = Object.keys(user).length > 0
	return (
		<header className="header">
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					<img
						src={hasUser > 0 ? gravatar(user.email) : userIcon}
						alt={user.email}
					/>
					<p>Perfil</p>
				</div>
				<ul>
					<li>
						<Link to="/">Cuenta</Link>
					</li>
					<li>
						<Link to="/login">Iniciar sesión</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

const mapStateToProps = state => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps, null)(Header)
