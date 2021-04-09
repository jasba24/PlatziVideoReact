import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import VistaPrincipal from "../pages/VistaPrincipal"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={VistaPrincipal}></Route>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/register" component={Register}></Route>
				<Route component={NotFound}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
