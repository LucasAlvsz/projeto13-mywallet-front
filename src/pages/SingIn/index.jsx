import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import dotenv from "dotenv"

import { AuthContext } from "../../providers/AuthProvider"
import LogoAnimation from "../../components/LogoAnimation"

import * as S from "./styles"
dotenv.config()
console.log(process.env)
export default function SingIn() {
	const navigate = useNavigate()
	const { signIn, isLoading, errorWarning, setIsLoading, setErrorWarning } =
		useContext(AuthContext)
	const [dataUser, setDataUser] = useState({
		email: "lucas@gmail.com",
		password: "testes",
	})
	function singIn(e) {
		e.preventDefault()
		signIn(dataUser)
		axios
			.post(`http://localhost:5000/singin`, dataUser)
			.then(() => {
				navigate("/flows")
				setIsLoading(false)
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
					defaultValue={dataUser.email}
					onChange={e =>
						setDataUser({ ...dataUser, email: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="Senha"
					defaultValue={dataUser.password}
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
