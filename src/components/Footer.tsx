import styled from "styled-components";
import { Colors, Shadows } from "../globalStyles";

const Stripe = styled.div`
  height: 3px;
  width: 100%;
`;

const FooterBar = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #bbb;
  background-color: ${Colors.charcoal};
  position: absolute;
  bottom: 0;
  width: 100%;
  // padding-bottom: 5px;
  box-shadow: ${Shadows.standard1};

  a {
    text-decoration: none;
    color: gold;
  }
  h6 {
  }
  p {
    margin: 0px;
    font-size: 0.8rem;
    letter-spacing: 2px;
    font-weight: 200;
    color: white;
  }
`;

export default function Header() {
  return (
    <>
      <FooterBar>
        <Stripe style={{ backgroundColor: "gold" }} />
        <Stripe style={{ backgroundColor: "red", marginBottom: "5px" }} />
        <p>©Paul Salamone Dev & Design</p>
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@mateokross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Mateo Krössler
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/germany?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </FooterBar>
    </>
  );
}
