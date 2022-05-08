import * as S from "./styles"

export default function Flow({ value, description, type, date }) {
	return (
		<S.Flow>
			<div className="date-and-descr">
				<S.FlowDate>{date}</S.FlowDate>
				<S.FlowDescription>{description}</S.FlowDescription>
			</div>
			<S.FlowValue type={type}>
				R$ {value % 1 === 0 ? value + ".00" : value}
			</S.FlowValue>
		</S.Flow>
	)
}
