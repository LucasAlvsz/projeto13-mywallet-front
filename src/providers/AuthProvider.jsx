import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {})
	const [errorWarning, setErrorWarning] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		if (!user && localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
	}, [user])
	const signIn = user => {
		setIsLoading(true)
		if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
		else {
			axios
				.post(`${process.env.REACT_APP_URI}/signIn`, user)
				.then(({ data }) => {
					setUser(data)
					localStorage.setItem("user", JSON.stringify(data))
					setIsLoading(false)
					setErrorWarning(false)
				})
				.catch(({ response: { data } }) => {
					console.log(data)
					setErrorWarning(data)
					setIsLoading(false)
				})
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				errorWarning,
				setErrorWarning,
				setUser,
				setIsLoading,
				signIn,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
