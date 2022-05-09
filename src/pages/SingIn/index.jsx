import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import dotenv from "dotenv"

import { AuthContext } from "../../providers/AuthProvider"
import LogoAnimation from "../../components/LogoAnimation"
import DeleteAnimation from "../../components/DeleteAnimation"
import * as S from "./styles"
dotenv.config()

export default function SingIn() {
	const navigate = useNavigate()
	const {
		setUser,
		user,
		isLoading,
		errorWarning,
		setIsLoading,
		setErrorWarning,
	} = useContext(AuthContext)
	const [dataUser, setDataUser] = useState({})
	useEffect(() => {
		if (user) navigate("/flows")
		else if (localStorage.getItem("user")) {
			setUser(JSON.parse(localStorage.getItem("user")))
			navigate("/flows")
		}
	}, [user])

	function singIn(e) {
		e.preventDefault()
		// signIn(dataUser)
		axios
			.post(`https://mywallet-api-project.herokuapp.com/singin`, dataUser)
			.then(({ data }) => {
				localStorage.setItem("user", JSON.stringify(data))
				setUser(data)
				console.log(data)
				setIsLoading(false)
				navigate("/flows")
			})
			.catch(({ response: { data } }) => {
				console.log(data)
				setIsLoading(false)
				setErrorWarning(data)
			})
	}

	return (
		<S.SingIn>
			<LogoAnimation style={S.LogoStyle} />
			<h1>MyWallet</h1>
			<S.SingInForm isLoading={isLoading} onSubmit={singIn}>
				<input
					type="email"
					placeholder="E-mail"
					onChange={e =>
						setDataUser({ ...dataUser, email: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="Senha"
					onChange={e =>
						setDataUser({ ...dataUser, password: e.target.value })
					}
				/>
				<button type="submit" disabled={isLoading}>
					Entrar
				</button>
			</S.SingInForm>
			<Link to="/singup">Primeira vez? Cadastre-se!</Link>
			{errorWarning ? (
				<S.ErrorWarning>{errorWarning}</S.ErrorWarning>
			) : null}
		</S.SingIn>
	)
}
