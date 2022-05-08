import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import LogoAnimation from "../../components/LogoAnimation"

import * as S from "./styles"

export default function SingUp() {
	const navigate = useNavigate()
	const [userData, setUserData] = useState()
	const [inputStatus, setInputStatus] = useState({
		isLoading: false,
		isError: false,
	})
	const dataUserValidate = e => {
		e.preventDefault()
		const userDataReq = { ...userData, repeatPassword: userData.password }
		axios
			.post(`http://localhost:5000/singup`, userDataReq)
			.then(({ data }) => {
				console.log(data)
				navigate("/singin")
			})
			.catch(({ response: { data } }) => {
				console.log(data)
			})
	}

	return (
		<S.SingUp>
			<LogoAnimation style={S.LogoStyle} />
			<h1>MyWallet</h1>
			<S.SingUpForm onSubmit={dataUserValidate} inputStatus={inputStatus}>
				<input
					type="text"
					placeholder="Nome"
					required
					onChange={e =>
						setUserData({ ...userData, name: e.target.value })
					}
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
							? setInputStatus({ ...inputStatus, isError: true })
							: setInputStatus({
									...inputStatus,
									isError: false,
							  })
					}}
				/>
				<button type="submit">Cadastrar</button>
			</S.SingUpForm>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</S.SingUp>
	)
}
