import { createContext, useState } from "react"
import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [errorWarning, setErrorWarning] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const signIn = user => {
		setIsLoading(true)
		if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
		else {
			axios
				.post(`http://localhost:5000/singin`, user)
				.then(({ data }) => {
					setUser(data)
					localStorage.setItem("user", JSON.stringify(data))
					console.log(data)
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

	const signOut = () => {
		localStorage.removeItem("user")
		setUser(null)
	}

	const singUp = user => {
		axios
			.post(`${process.env.API_URL}/signup`, user)
			.then(() => {
				console.log("Usuário criado com sucesso!")
			})
			.catch(err => {
				console.log(err)
				return err
			})
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
				signOut,
				singUp,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
