import { useNavigate, useLocation } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import axios from "axios"

import { AuthContext } from "../../providers/AuthProvider"

import ButtonLoading from "../../components/ButtonLoading"

import * as S from "./styles"

export default function NewFlow() {
	const navigate = useNavigate()
	const {
		user,
		setUser,
		isLoading,
		setIsLoading,
		errorWarning,
		setErrorWarning,
	} = useContext(AuthContext)
	const {
		state: { type, req, flowId, description, value },
	} = useLocation()
	const [flowData, setFlowData] = useState({ type, description, value })
	useEffect(() => {
		if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
		else navigate("/")
	}, [])
	function newFlow(req) {
		if (req === "post") {
			axios
				.post(`${process.env.REACT_APP_URI}/flows`, flowData, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then(() => {
					navigate("/flows")
					setIsLoading(false)
					setErrorWarning(false)
				})
				.catch(({ response: { data } }) => {
					setIsLoading(false)
					setErrorWarning(data)
					console.log(data)
				})
		} else if (req === "put") {
			axios
				.put(`${process.env.REACT_APP_URI}/flows/${flowId}`, flowData, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then(() => {
					navigate("/flows")
					setIsLoading(false)
					setErrorWarning(false)
				})
				.catch(({ response: { data } }) => {
					setIsLoading(false)
					setErrorWarning(data)
					console.log(data)
				})
		}
	}
	return (
		<S.Main isLoading={isLoading}>
			<h1>
				{req === "post" ? "Nova " : "Editar "}
				{type === "inflow" ? "entrada" : "saída"}
			</h1>
			<form
				onSubmit={e => {
					e.preventDefault()
					setIsLoading(true)
					newFlow(req)
				}}>
				<input
					type="number"
					placeholder="Valor"
					step="any"
					min="0.01"
					required
					value={req === "put" ? flowData.value : undefined}
					onChange={e =>
						setFlowData({ ...flowData, value: e.target.value })
					}
				/>
				<input
					type="text"
					placeholder="Descrição"
					required
					value={req === "put" ? flowData.description : undefined}
					onChange={e =>
						setFlowData({
							...flowData,
							description: e.target.value,
						})
					}
				/>
				{req === "put" ? (
					<select
						defaultValue={flowData.type}
						onChange={e =>
							setFlowData({ ...flowData, type: e.target.value })
						}>
						<option value="inflow">Entrada</option>
						<option value="outflow">Saída</option>
					</select>
				) : (
					""
				)}
				<div className="buttons">
					<button type="submit">
						{isLoading ? (
							<ButtonLoading />
						) : req === "post" ? (
							`Salvar nova ${
								flowData.type === "inflow" ? "entrada" : "saída"
							}`
						) : (
							"Salvar edição"
						)}
					</button>

					<button onClick={() => navigate("/flows")}>Cancelar</button>
				</div>
			</form>

			{errorWarning ? (
				<S.ErrorWarning>{errorWarning}</S.ErrorWarning>
			) : (
				""
			)}
		</S.Main>
	)
}
