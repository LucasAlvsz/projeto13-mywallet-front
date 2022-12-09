import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Flow from "../../components/Flow"

import { AuthContext } from "../../providers/AuthProvider"

import * as S from "./styles"

export default function Flows() {
	const navigate = useNavigate()
	const { user, setUser, isLoading, setIsLoading } = useContext(AuthContext)
	const [flows, setFlows] = useState([])
	const [update, setUpdate] = useState(false)
	useEffect(() => {
		if (user) {
			setIsLoading(true)
			axios
				.get(`${process.env.REACT_APP_URI}/flows`, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then(({ data }) => {
					let total = 0
					data.forEach(({ type, value }) =>
						type === "inflow"
							? (total += parseFloat(value))
							: (total -= parseFloat(value))
					)
					total = total.toFixed(2)
					setFlows({ data, ...(data.length && { total }) })
					setIsLoading(false)
				})
				.catch(err => {
					console.log(err)
					setIsLoading(false)
				})
		} else if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
		else navigate("/")
	}, [user, update])
	return (
		<>
			<Header userName={user ? user.name : ""} />
			<S.Main>
				<S.Activity>
					<S.FlowsContainer isLoading={isLoading}>
						{flows &&
							flows.data &&
							flows.data.map(
								(
									{ flowId, value, description, type, date },
									index
								) => (
									<Flow
										key={flowId}
										flowId={flowId}
										index={index}
										value={value}
										description={description}
										type={type}
										date={date}
										update={() => setUpdate(!update)}
									/>
								)
							)}
					</S.FlowsContainer>
					{flows && !flows.total ? (
						<div className="total">
							Não há registros de <br />
							entrada ou saída
						</div>
					) : (
						<S.FlowTotal total={flows.total}>
							<p>Saldo</p>
							<p>{flows ? flows.total : ""}</p>
						</S.FlowTotal>
					)}
				</S.Activity>
			</S.Main>
			<Footer />
		</>
	)
}
