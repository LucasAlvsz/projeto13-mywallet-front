import { Link } from "react-router-dom"
import * as S from "./styles"

export default function SingIn() {
	return (
		<S.SingIn>
			<h1>MyWallet</h1>
			<S.SingInForm>
				<input type="email" placeholder="E-mail" />
				<input type="password" placeholder="Senha" />
				<button type="submit">Entrar</button>
			</S.SingInForm>
			<Link to="/singup">Primeira vez? Cadastre-se!</Link>
		</S.SingIn>
	)
}
