import { ReactComponent as PlusButton } from "../../assets/icons/plus.svg"
import { ReactComponent as MinusButton } from "../../assets/icons/minus.svg"

import * as S from "./styles"

export default function Footer() {
	return (
		<S.Footer>
			<S.FlowContainer>
				<PlusButton />
				<p>
					Nova <br /> Entrada
				</p>
			</S.FlowContainer>
			<S.FlowContainer>
				<MinusButton />
				<p>
					Nova <br /> Saida
				</p>
			</S.FlowContainer>
		</S.Footer>
	)
}
