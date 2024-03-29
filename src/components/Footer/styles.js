import styled from "styled-components"

export const Footer = styled.footer`
	width: 100%;
	height: 143px;
	display: flex;
	align-items: center;
	padding: 14px 0 0 25px;
`

export const NewFlowContainer = styled.div`
	width: 155px;
	height: 114px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #a328d6;
	border-radius: 5px;
	padding: 10px;
	margin-right: 15px;
	margin-bottom: 5px;
	pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
	cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
	:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.05);
	}
	> p {
		font-family: "Raleway";
		font-weight: 700;
		font-size: 17px;
		line-height: 20px;
		color: #ffffff;
		cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
	}
`
