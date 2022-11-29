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
export const SingUp = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 25px;
	h1 {
		font-family: "Saira Stencil One", cursive;
		font-weight: 400;
		font-size: 32px;
		line-height: 50px;
		color: #ffffff;
		margin-bottom: 24px;
	}
	a {
		font-family: "Raleway", sans-serif;
		font-weight: 700;
		font-size: 15px;
		line-height: 18px;
		color: #fff;
		margin-top: 36px;
		:hover {
			text-decoration: underline;
		}
	}
`
export const SingUpForm = styled.form`
	width: 100%;
	input {
		width: 100%;
		height: 58px;
		border-radius: 5px;
		margin-bottom: 13px;
		display: flex;
		align-items: center;
		padding-left: 15px;
		font-size: 20px;
		line-height: 23px;
		font-weight: 700;
		background: ${({ isLoading }) => (isLoading ? "#d69ccf" : "#fff")};
		pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
		&::placeholder {
			color: #000000;
			font-weight: 400;
		}
		&:nth-child(2) {
			border: 3px solid
				${({ isError }) =>
					isError && isError[0] === '"email" must be a valid email'
						? "tomato"
						: "#fff"};
			animation: ${({ isError }) =>
					isError && isError[0] === '"email" must be a valid email'
						? shake
						: ""}
				0.3s;
		}
		&:nth-child(4) {
			border: 3px solid
				${({ isError }) =>
					isError === "As senhas não correspondem"
						? "tomato"
						: "#fff"};
			animation: ${({ isError }) =>
					isError === "As senhas não correspondem" ? shake : ""}
				0.3s;
		}
	}
	button {
		width: 100%;
		height: 58px;
		border-radius: 5px;
		color: #fff;
		background: #a328d6;
		font-size: 20px;
		font-weight: 700;
		line-height: 23px;
		cursor: ${({ isLoading }) => (isLoading ? "wait" : "pointer")};
	}
	@media (min-width: 768px) {
		width: 400px;
	}
`
export const ErrorWarning = styled.p`
	font-family: "Raleway", sans-serif;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #fff;
	margin-top: 30px;
`

export const LogoStyle = {
	width: "100px",
	height: "100px",
}
