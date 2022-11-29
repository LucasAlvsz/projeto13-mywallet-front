import styled, { keyframes } from "styled-components"

const shake = keyframes`
	0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-1.5px, 0px) rotate(1deg); }
  30% { transform: translate(1.5px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-1.5px, 1px) rotate(0deg); }
  70% { transform: translate(1.5px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

export const Flow = styled.div`
	width: 100%;
	height: 20px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 7px;
	font-family: "Raleway";
	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	:hover {
		transition: all 0.1s ease-in-out;
		background: rgba(0, 0, 0, 0.1);
		cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};
		pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
	}
	.date-and-descr {
		display: flex;
		font-family: "Raleway";
	}
	.close-button {
		color: #c6c6c6;
		width: 22.5px;
		position: absolute;
		top: 0px;
		right: -5px;
		:hover {
			cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
			transition: all 0.2s ease-in-out;
			animation: ${({ isLoading }) => (isLoading ? shake : "none")} 0.5s;
			color: tomato;
		}
	}
`

export const FlowDate = styled.p`
	color: #c6c6c6;
	cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};
`
export const FlowDescription = styled.p`
	color: #000;
	font-family: "Raleway";
	margin-left: 10px;
	cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};
`
export const FlowValue = styled.p`
	font-family: "Raleway";
	color: ${({ type }) => (type === "outflow" ? "#C70000" : "#03AC00")};
	margin-right: 20px;
	cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};
`
