import { actions } from "./actions"

export const setFavorite = payload => ({
	type: actions.setFavorite,
	payload,
})

export const deleteFavorite = payload => ({
	type: actions.deleteFavorite,
	payload,
})

export const loginRequest = payload => ({
	type: actions.loginRequest,
	payload,
})

export const logoutRequest = payload => ({
	type: actions.logoutRequest,
	payload,
})

export const registerRequest = payload => ({
	type: actions.registerRequest,
	payload,
})
