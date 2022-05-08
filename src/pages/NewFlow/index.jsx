import { useNavigate, useLocation } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import axios from "axios"

import { AuthContext } from "../../providers/AuthProvider"

import * as S from "./styles"

export default function NewFlow() {
	const navigate = useNavigate()
	const { user, setUser } = useContext(AuthContext)
	const {
		state: { type },
	} = useLocation()
	const [flowData, setFlowData] = useState({ type })
	useEffect(() => {
		if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
		else navigate("/")
	}, [])
	function newFlow() {
		console.log(flowData)
		axios
			.post("http://localhost:5000/flows", flowData, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			})
			.then(() => {
				navigate("/flows")
			})
			.catch(({ response: { data } }) => {
				console.log(data)
			})
	}
	return (
		<S.Main>
			<h1>Nova {type === "inflow" ? "Entrada" : "Saída"}</h1>
			<form
				onSubmit={e => {
					e.preventDefault()
					newFlow()
				}}>
				<input
					type="number"
					placeholder="Valor"
					step="any"
					required
					onChange={e =>
						setFlowData({ ...flowData, value: e.target.value })
					}
				/>
				<input
					type="text"
					placeholder="Descrição"
					required
					onChange={e =>
						setFlowData({
							...flowData,
							description: e.target.value,
						})
					}
				/>
				<button type="submit">
					Salvar {type === "inflow" ? "Entrada" : "Saída"}
				</button>
			</form>
		</S.Main>
	)
}
