import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { ReactComponent as CloseButton } from "../../assets/icons/delete.svg"

import { AuthContext } from "../../providers/AuthProvider"

import * as S from "./styles"

export default function Flow({
	index,
	value,
	description,
	type,
	date,
	flowId,
	update,
}) {
	const navigate = useNavigate()
	const { user, setUser, isLoading, setIsLoading } = useContext(AuthContext)
	useEffect(() => {
		if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
		else navigate("/")
	}, [])
	function deleteFlow(flowId) {
		setIsLoading(true)
		if (
			!window.confirm(
				`Deseja deletar o fluxo ${
					type === "inflow" ? "entrada" : "saída"
				}?`
			)
		) {
			setIsLoading(false)
			return -1
		}
		axios
			.delete(`${process.env.REACT_APP_URI}/flows/${flowId}`, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			})
			.then(() => {
				setIsLoading(false)
				update()
			})
			.catch(err => {
				setIsLoading(false)
				update()
				console.log(err)
			})
	}
	return (
		<S.Flow
			index={index}
			isLoading={isLoading}
			onClick={() =>
				navigate("/newFlow", {
					state: {
						flowId,
						description,
						value,
						type,
						req: "put",
					},
				})
			}>
			<div className="date-and-descr">
				<S.FlowDate>{date}</S.FlowDate>
				<S.FlowDescription>{description}</S.FlowDescription>
			</div>

			<S.FlowValue index={index} type={type} isLoading={isLoading}>
				R$ {value % 1 === 0 ? value + ".00" : value}
			</S.FlowValue>

			<CloseButton
				className="close-button"
				onClick={e => {
					deleteFlow(flowId)
					e.stopPropagation()
				}}
			/>
		</S.Flow>
	)
}
