import { useNavigate, useLocation } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import axios from "axios"

import { AuthContext } from "../../providers/AuthProvider"

import * as S from "./styles"

export default function NewFlow() {
	const navigate = useNavigate()
	const { user, setUser } = useContext(AuthContext)
	const {
		state: { type, total, req, flowId },
	} = useLocation()
	const [flowData, setFlowData] = useState({ type })
	useEffect(() => {
		if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
		else navigate("/")
	}, [])
	function newFlow(req) {
		console.log(flowData)
		if (req === "post") {
			axios
				.post("http://localhost:5000/flows", flowData, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then(({ data }) => {
					navigate("/flows")
				})
				.catch(({ response: { data } }) => {
					console.log(data)
				})
		} else if (req === "put") {
			axios
				.put(`http://localhost:5000/flows/${flowId}`, flowData, {
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
	}
	return (
		<S.Main>
			<h1>
				{req === "post" ? "Nova " : "Editar "}
				{type === "inflow" ? "entrada" : "saída"}
			</h1>
			<form
				onSubmit={e => {
					e.preventDefault()
					newFlow(req)
				}}>
				<input
					type="number"
					placeholder="Valor"
					step="any"
					min="0.01"
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
					Salvar {type === "inflow" ? "entrada" : "saída"}
				</button>
			</form>
		</S.Main>
	)
}
