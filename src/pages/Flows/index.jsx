import axios from "axios"
import { useState, useContext, useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Flow from "../../components/Flow"

import { AuthContext } from "../../providers/AuthProvider"

import * as S from "./styles"

export default function Flows() {
	const [flows, setFlows] = useState(null)
	const { user, setUser } = useContext(AuthContext)
	useEffect(() => {
		if (user) {
			axios
				.get(`http://localhost:5000/flows`, {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				})
				.then(({ data }) => {
					let total = 0
					data.forEach(({ value }) => (total += parseFloat(value)))
					total = total.toFixed(2)
					setFlows({ data, total })
				})
				.catch(err => {
					console.log(err)
				})
		} else if (localStorage.getItem("user"))
			setUser(JSON.parse(localStorage.getItem("user")))
	}, [user])

	function getFlows() {}
	return (
		<>
			<Header userName={user ? user.name : ""} />
			<S.Main>
				<S.FlowsContainer>
					{flows
						? flows.data.map(
								({
									flowId,
									value,
									description,
									type,
									date,
								}) => (
									<Flow
										key={flowId}
										value={value}
										description={description}
										type={type}
										date={date}
									/>
								)
						  )
						: ""}
					<S.FlowTotal>
						<p>Saldo</p>
						<p>{flows ? flows.total : ""}</p>
					</S.FlowTotal>
				</S.FlowsContainer>
			</S.Main>
			<Footer />
		</>
	)
}
