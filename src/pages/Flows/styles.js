import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: calc(100vh - 199px);
	display: flex;
	flex-direction: column;
	padding: 0 25px;
`
export const Activity = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background: #fff;
	border-radius: 5px;
	margin-top: 22px;
	padding: 20px 5px 10px 12px;
	.total {
		width: 100%;
		height: 20px;
		position: absolute;
		top: 45%;
		font-family: "Raleway";
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		text-align: center;
		color: #868686;
		padding-right: 23px;
	}
`
export const FlowsContainer = styled.div`
	width: 100%;
	max-height: calc(100vh - 280px);
	overflow-y: scroll;
	background: #fff;
	border-radius: 5px;
	pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 10px 10px #fff;
		border: solid 10px #fff;
	}

	::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 10px 10px #a328d6;
		border: solid 10px #fff;
		border-radius: 30px;
	}
`
export const FlowTotal = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	padding-right: 10px;
	p {
		font-family: "Raleway";
		font-style: normal;
		font-size: 17px;
		line-height: 20px;
		color: ${({ total }) => (total >= 0 ? "#03ac00" : "#C70000")};
		&:first-child {
			font-weight: 700;
			color: #000;
		}
	}
`
