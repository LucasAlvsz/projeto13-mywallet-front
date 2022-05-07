import { Link } from "react-router-dom"
import { useState } from "react"
import * as S from "./styles"

export default function SingUp() {
	const [userData, setUserData] = useState({})
	const [inputStatus, setInputStatus] = useState({
		isLoading: false,
		isError: false,
	})
	const dataUserValidate = e => {
		e.preventDefault()
	}

	return (
		<S.SingUp>
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
					onChange={e =>
						e.target.value !== userData.password
							? setInputStatus({ ...inputStatus, isError: true })
							: setInputStatus({
									...inputStatus,
									isError: false,
							  }) &&
							  setUserData({
									...userData,
									confirmPassword: e.target.value,
							  })
					}
				/>
				<button type="submit">Cadastrar</button>
			</S.SingUpForm>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</S.SingUp>
	)
}
