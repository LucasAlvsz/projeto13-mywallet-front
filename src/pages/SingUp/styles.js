import styled from "styled-components"

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
		&::placeholder {
			color: #000000;
			font-weight: 400;
		}
		&:nth-child(4) {
			border: 3.5px solid
				${({ inputStatus: { isError } }) =>
					isError ? "#db004e" : "#fff"};
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
	}
`
export const LogoStyle = {
	width: "100px",
	height: "100px",
}
