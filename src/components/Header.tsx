import styled from "styled-components";
import { Colors, Shadows } from "../globalStyles";
const TopBar = styled.header`
  background-color: ${Colors.charcoal};
  color: white;
  font-size: 2rem;
  width: 100%;
  box-shadow: ${Shadows.standard1};
  h1 {
    padding: 30px;
    margin: 0px;
    text-align: center;
    font-family: "Germania One", sans-serif;
    font-size: 1.3rem;

    @media screen and (min-width: 350px) {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 400px) {
      font-size: 1.8rem;
    }

    @media screen and (min-width: 481px) {
      font-size: 2.2rem;
    }

    @media screen and (min-width: 500px) {
      font-size: 2.3rem;
    }

    @media screen and (min-width: 650px) {
      font-size: 3rem;
    }

    @media screen and (min-width: 700px) {
      font-size: 3.5rem;
    }
  }
`;

const Stripe = styled.div`
  height: 7px;
  width: 100%;
`;

export default function Header() {
  return (
    <>
      <TopBar>
        <h1>🍺 German Name Generator 🥨</h1>
        <Stripe style={{ backgroundColor: "red" }} />
        <Stripe style={{ backgroundColor: "gold" }} />
      </TopBar>
    </>
  );
}
