import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	height: 56px;
	display: flex;
	justify-content: space-between;
	align-items: end;
	padding: 0 25px;
	h1 {
		font-family: "Raleway";
		font-weight: 700;
		font-size: 26px;
		line-height: 31px;
		color: #ffffff;
		margin-left: 60px;
	}
	.LogoutButton {
		margin-bottom: 5px;
		cursor: pointer;
	}
	.logo-and-name {
		top: 5px;
		left: 20px;
		position: absolute;
	}
`

export const LogoStyle = {
	width: "65px",
	height: "65px",
}
