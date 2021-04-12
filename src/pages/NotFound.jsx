import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/NotFound.scss"

const NotFound = () => (
	<>
		<Header />
		<section className="not-found">
			<h2 className="not-found__title">404</h2>
			<h3>Página no encontrada</h3>
		</section>
		<Footer />
	</>
)

export default NotFound
