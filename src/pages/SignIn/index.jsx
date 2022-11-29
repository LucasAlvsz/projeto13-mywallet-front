import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"

import { AuthContext } from "../../providers/AuthProvider"
import LogoAnimation from "../../components/LogoAnimation"
import ButtonLoading from "../../components/ButtonLoading"

import * as S from "./styles"

export default function SignIn() {
	const navigate = useNavigate()
	const { setUser, user, isLoading, setErrorWarning, errorWarning, signIn } =
		useContext(AuthContext)
	const [dataUser, setDataUser] = useState({})
	useEffect(() => {
		setErrorWarning(false)
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
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					required
					onChange={e =>
						setDataUser({ ...dataUser, email: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="Senha"
					required
					onChange={e =>
						setDataUser({ ...dataUser, password: e.target.value })
					}
				/>
				<button type="submit" disabled={isLoading}>
					{isLoading ? <ButtonLoading /> : "Entrar"}
				</button>
			</S.SingInForm>
			{errorWarning ? (
				<S.ErrorWarning>{errorWarning}</S.ErrorWarning>
			) : null}
			<Link to="/signUp" onClick={() => setErrorWarning(false)}>
				Primeira vez? Cadastre-se!
			</Link>
		</S.SingIn>
	)
}
