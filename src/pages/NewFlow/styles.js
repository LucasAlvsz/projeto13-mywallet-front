import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 25px 25px;
	font-family: "Raleway";
	@media (min-width: 768px) {
		align-items: center;
		justify-content: center;
		form {
			width: 400px;
		}
	}
	h1 {
		font-weight: 700;
		font-size: 26px;
		line-height: 31px;
		color: #fff;
		margin-bottom: 40px;
	}
	input {
		width: 100%;
		height: 58px;
		border-radius: 5px;
		font-size: 20px;
		line-height: 23px;
		font-weight: 700;
		color: #000;
		padding: 18px 15px;
		margin-bottom: 13px;
		background: ${({ isLoading }) => (isLoading ? "#d69ccf" : "#fff")};
		pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
		&::placeholder {
			font-weight: 400;
		}
		&-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
	select {
		width: 100%;
		height: 58px;
		border-radius: 5px;
		font-size: 20px;
		line-height: 23px;
		font-weight: 700;
		color: #000;
		padding: 0px 10px;
		margin-bottom: 13px;
		&::placeholder {
			font-weight: 400;
		}
		background: ${({ isLoading }) => (isLoading ? "#d69ccf" : "#fff")};
		pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
	}
	.buttons {
		/* width: 100%; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	button {
		width: 100%;
		height: 46px;
		background: #a328d6;
		border-radius: 5px;
		font-weight: 700;
		font-size: 20px;
		line-height: 23px;
		color: #fff;
		cursor: ${({ isLoading }) => (isLoading ? "wait" : "pointer")};
		padding: ${({ isLoading }) => (isLoading ? "14px" : "0")} 0px;
		&:last-child {
			width: 100px;
			margin-top: 13px;
			background: #8c11be;
		}
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
