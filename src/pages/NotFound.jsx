import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/NotFound.scss"

const NotFound = () => (
	<div>
		<Header />
		<section class="not-found">
			<h2 class="not-found__title">404</h2>
			<h3>Página no encontrada</h3>
		</section>
		<Footer />
	</div>
)

export default NotFound
