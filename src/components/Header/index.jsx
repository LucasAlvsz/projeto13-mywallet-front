import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import axios from "axios"

import { AuthContext } from "../../providers/AuthProvider"

import { ReactComponent as LogoutButton } from "../../assets/icons/logout.svg"

import * as S from "./styles"

export default function Header({ userName }) {
	const navigate = useNavigate()
	const { user, setUser } = useContext(AuthContext)
	return (
		<S.Header>
			<h1>Olá, {userName} </h1>
			<LogoutButton
				className="LogoutButton"
				onClick={() => {
					axios
						.post(
							"https://mywallet-api-project.herokuapp.com/singout",
							"",
							{
								headers: {
									Authorization: `Bearer ${user.token}`,
								},
							}
						)
						.then(() => {
							setUser(null)
							localStorage.removeItem("user")
							navigate("/singin")
						})
						.catch(err => {
							console.log(err)
						})
				}}
			/>
		</S.Header>
	)
}
