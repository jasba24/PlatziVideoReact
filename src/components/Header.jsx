import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/static/logo-platzi-video-BW2.png"
import userIcon from "../assets/static/user-icon.png"

const Header = ({ userIsTrue }) => (
	<>
		{userIsTrue ? (
			<header className="header__home">
				<Link to="/">
					<img className="header__img" src={logo} alt="Platzi Video" />
				</Link>
				{userIsTrue && (
					<div className="header__menu">
						<div className="header__menu--profile">
							<img src={userIcon} alt="" />
							<p>Perfil</p>
						</div>
						<ul>
							<li>
								<Link to="/login">Cuenta</Link>
							</li>
							<li>
								<Link to="/register">Cerrar Sesión</Link>
							</li>
						</ul>
					</div>
				)}
			</header>
		) : (
			<header className="header">
			<Link to="/"><img className="header__img" src={logo} alt="Platzi Video" /></Link>
				{userIsTrue && (
					<div className="header__menu">
						<div className="header__menu--profile">
							<img src={userIcon} alt="" />
							<p>Perfil</p>
						</div>
						<ul>
							<li>
								<a href="/">Cuenta</a>
							</li>
							<li>
								<a href="/">Cerrar Sesión</a>
							</li>
						</ul>
					</div>
				)}
			</header>
		)}
	</>
)

export default Header
