import { useNavigate } from "react-router-dom"
import { useContext } from "react"

import { ReactComponent as PlusButton } from "../../assets/icons/plus.svg"
import { ReactComponent as MinusButton } from "../../assets/icons/minus.svg"

import { AuthContext } from "../../providers/AuthProvider"

import * as S from "./styles"

export default function Footer() {
	const navigate = useNavigate()
	const { isLoading } = useContext(AuthContext)
	return (
		<S.Footer>
			<S.NewFlowContainer
				isLoading={isLoading}
				onClick={() => {
					navigate("/newflow", {
						state: { type: "inflow", req: "post" },
					})
				}}>
				<PlusButton />
				<p>
					Nova <br /> Entrada
				</p>
			</S.NewFlowContainer>
			<S.NewFlowContainer
				onClick={() => {
					navigate("/newflow", {
						state: { type: "outflow", req: "post" },
					})
				}}>
				<MinusButton />
				<p>
					Nova <br /> Saida
				</p>
			</S.NewFlowContainer>
		</S.Footer>
	)
}
