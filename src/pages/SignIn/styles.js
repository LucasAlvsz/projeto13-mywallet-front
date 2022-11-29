import styled from "styled-components"

export const SingIn = styled.main`
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
export const SingInForm = styled.form`
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
		font-weight: 400;
		background: ${({ isLoading }) => (isLoading ? "#d69ccf" : "#fff")};
		pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
		&::placeholder {
			color: #000000;
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
	margin-top: 36px;
`

export const LogoStyle = {
	width: "100px",
	height: "100px",
}
