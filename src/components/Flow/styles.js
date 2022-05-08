import styled from "styled-components"

export const Flow = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 7px;
	font-family: "Raleway";
	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	.date-and-descr {
		display: flex;
		font-family: "Raleway";
	}
`

export const FlowDate = styled.p`
	color: #c6c6c6;
`
export const FlowDescription = styled.p`
	color: #000;
	font-family: "Raleway";
	margin-left: 10px;
`
export const FlowValue = styled.p`
	font-family: "Raleway";
	color: ${({ type }) => (type === "outflow" ? "#C70000" : "#03AC00")};
`
