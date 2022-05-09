import { useNavigate } from "react-router-dom"
import { ReactComponent as PlusButton } from "../../assets/icons/plus.svg"
import { ReactComponent as MinusButton } from "../../assets/icons/minus.svg"

import * as S from "./styles"

export default function Footer() {
	const navigate = useNavigate()
	return (
		<S.Footer>
			<S.FlowContainer>
				<PlusButton
					onClick={() => {
						navigate("/newflow", {
							state: { type: "inflow", req: "post" },
						})
					}}
				/>
				<p>
					Nova <br /> Entrada
				</p>
			</S.FlowContainer>
			<S.FlowContainer>
				<MinusButton
					onClick={() => {
						navigate("/newflow", {
							state: { type: "outflow", req: "post" },
						})
					}}
				/>
				<p>
					Nova <br /> Saida
				</p>
			</S.FlowContainer>
		</S.Footer>
	)
}
