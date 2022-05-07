import * as S from "./styles"

export default function NewFlow() {
	return (
		<S.Main>
			<h1>Nova Entrada</h1>
			<form>
				<input type="number" placeholder="Valor" step="any" />
				<input type="text" placeholder="Descrição" />
				<button type="submit">Salvar Entrada</button>
			</form>
		</S.Main>
	)
}
