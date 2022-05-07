import Header from "../../components/Header"
import Footer from "../../components/Footer"

import * as S from "./styles"

export default function Flows() {
	return (
		<>
			<Header />
			<S.Main>
				<S.FlowsContainer></S.FlowsContainer>
			</S.Main>
			<Footer />
		</>
	)
}
