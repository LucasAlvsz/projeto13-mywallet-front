import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"

import { AuthContext } from "../../providers/AuthProvider"
import LogoAnimation from "../../components/LogoAnimation"
import ButtonLoading from "../../components/ButtonLoading"

import * as S from "./styles"

export default function SignUp() {
	const navigate = useNavigate()
	const { isLoading, setIsLoading, errorWarning, setErrorWarning } =
		useContext(AuthContext)
	const [userData, setUserData] = useState({ password: "" })

	function nameValidation(name) {
		return name
			.replace(/[0-9]/g, "")
			.replace(/[^a-zA-Z\u00C0-\u00FF/\s+]/g, "")
			.replace(/\s+/g, " ")
	}
	const signUp = e => {
		e.preventDefault()
		if (errorWarning === "As senhas não correspondem") return -1
		setIsLoading(true)
		const userDataReq = { ...userData, repeatPassword: userData.password }
		axios
			.post(`${process.env.REACT_APP_URI}/signup`, userDataReq)
			.then(({ data }) => {
				console.log(data)
				setIsLoading(false)
				navigate("/signin")
			})
			.catch(({ response: { data } }) => {
				setIsLoading(false)
				setErrorWarning(data)
				console.log(data)
			})
	}

	return (
		<S.SingUp>
			<LogoAnimation style={S.LogoStyle} />
			<h1>MyWallet</h1>
			<S.SingUpForm
				onSubmit={signUp}
				isLoading={isLoading}
				isError={errorWarning}>
				<input
					type="text"
					placeholder="Nome"
					required
					onChange={e => {
						e.target.value = nameValidation(e.target.value)
						setUserData({
							...userData,
							name: e.target.value,
						})
					}}
				/>
				<input
					type="email"
					placeholder="E-mail"
					required
					onChange={e =>
						setUserData({ ...userData, email: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="Senha"
					required
					onChange={e =>
						setUserData({ ...userData, password: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="Confirme a senha"
					required
					onChange={e => {
						e.target.value !== userData.password
							? setErrorWarning("As senhas não correspondem")
							: setErrorWarning(false)
					}}
				/>
				<button type="submit">
					{isLoading ? <ButtonLoading /> : "Cadastrar"}
				</button>
			</S.SingUpForm>
			<Link to="/" onClick={() => setErrorWarning(false)}>
				Já tem uma conta? Entre agora!
			</Link>
			<S.ErrorWarning>{errorWarning}</S.ErrorWarning>
		</S.SingUp>
	)
}
