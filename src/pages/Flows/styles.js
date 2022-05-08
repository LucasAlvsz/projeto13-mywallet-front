import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: calc(100vh - 199px);
	display: flex;
	flex-direction: column;
	padding: 0 25px;
`

export const FlowsContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	background: #fff;
	border-radius: 5px;
	margin-top: 22px;
	padding: 23px 12px;
`
export const FlowTotal = styled.div`
	width: 100%;
	height: auto;
	position: absolute;
	bottom: 10px;
	display: flex;
	justify-content: space-between;
	p {
		font-family: "Raleway";
		font-style: normal;
		font-size: 17px;
		line-height: 20px;
		color: #03ac00;
		margin-right: 23px;
		&:first-child {
			font-weight: 700;
			color: #000;
		}
	}
`