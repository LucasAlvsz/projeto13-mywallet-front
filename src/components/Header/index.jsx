import { ReactComponent as LogoutButton } from "../../assets/icons/logout.svg"

import * as S from "./styles"

export default function Header() {
	return (
		<S.Header>
			<h1>Olá, Fulano</h1>
			<LogoutButton className="LogoutButton" />
		</S.Header>
	)
}
