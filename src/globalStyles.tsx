import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import photo1 from "./images/photo1.jpg";

export const Colors = {
  charcoal: "#200010",
};

export const Shadows = {
  standard1: "0 0 10px rgba(0, 0, 0, 0.2)",
  standard2: "0 0 3px rgba(0, 0, 0, 0.2)",
  redgold1: "2px 2px 4px rgb(255, 0, 0), -4px -4px 5px gold",
};

export const Fonts = {
  standard: '"Source Sans 3", san-serif;',
  german: '"Germania One", serif',
};

export const Button = styled.button`
  background-color: ${Colors.charcoal};
  font-family: ${Fonts.german};
  color: white;
  border: 0px;
  border-radius: 30px;
  margin: 20px;
  padding: 15px 30px;
  font-size: 1.8rem;
  letter-spacing: 3px;
  box-shadow: ${Shadows.standard1};
  &: hover {
    box-shadow: ${Shadows.redgold1};
  }
`;
const GlobalStyle = createGlobalStyle`

* {
	// border: 1px dotted grey;
}

body {
	font-family: "Source Sans 3", san-serif;
	font-weight: 500;
	background-color: #eee;
	background-image: url(${photo1});
	background-size: cover;
	color: ${Colors.charcoal};
	min-height: 100vh;
	width: 100%;
	box-sizing: border-box;
	margin: 0px;
	padding: 0px;
	display: flex;
	flex-direction: column;
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 500px;
}

section {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
	margin-bottom: 15px;
	padding: 20px;
	width: 90%;
	height: 100vh;
	max-width: 900px;
	background-color: white;
	box-shadow: ${Shadows.standard1};
	border-radius: 10px;
	text-align: center;
	// overflow: scroll;
}


`;

export default GlobalStyle;
