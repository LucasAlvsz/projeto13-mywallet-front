import { useNavigate } from "react-router-dom"

import { ReactComponent as LogoutButton } from "../../assets/icons/logout.svg"

import * as S from "./styles"

export default function Header({ userName }) {
	const navigate = useNavigate()
	return (
		<S.Header>
			<h1>Olá, {userName} </h1>
			<LogoutButton
				className="LogoutButton"
				onClick={() => {
					localStorage.removeItem("user")
					navigate("/")
				}}
			/>
		</S.Header>
	)
}
