import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"

import { AuthContext } from "../../providers/AuthProvider"
import LogoAnimation from "../../components/LogoAnimation"

import * as S from "./styles"

export default function SignIn() {
	const navigate = useNavigate()
	const { setUser, user, isLoading, errorWarning, signIn } =
		useContext(AuthContext)
	const [dataUser, setDataUser] = useState({})
	useEffect(() => {
		if (user) navigate("/flows")
		else if (localStorage.getItem("user")) {
			setUser(JSON.parse(localStorage.getItem("user")))
			navigate("/flows")
		}
	}, [user])

	return (
		<S.SingIn>
			<LogoAnimation style={S.LogoStyle} />
			<h1>MyWallet</h1>
			<S.SingInForm
				isLoading={isLoading}
				onSubmit={e => {
					e.preventDefault()
					signIn(dataUser)
				}}>
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
