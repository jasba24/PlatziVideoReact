import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import gravatar from "../utils/gravatar"
import { logoutRequest } from "../actions"
import { Link } from "react-router-dom"
import logo from "../assets/static/logo-platzi-video-BW2.png"
import userIcon from "../assets/static/user-icon.png"

const Header = props => {
	const { user } = props
	const hasUser = Object.keys(user).length > 0

	const handleLogout = () => {
		props.logoutRequest({})
	}
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
					{hasUser ? (
						<li>
							<Link to="/">{user.name}</Link>
						</li>
					) : null}

					{hasUser ? (
						<li>
							<Link to="#logout" onClick={handleLogout}>
								Cerrar sesión
							</Link>
						</li>
					) : (
						<li>
							<Link to="/login">Iniciar sesión</Link>
						</li>
					)}
				</ul>
			</div>
		</header>
	)
}

Header.propTypes = {
	user: PropTypes.object,
}

const mapStateToProps = state => {
	return {
		user: state.user,
	}
}

const mapDispatchToProps = {
	logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
