import { Colors, Shadows, Fonts, Button } from "../globalStyles";
import styled from "styled-components";

// interface GenProps {
//   handleGenerate: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }
// export default function GenerateButton(Props: GenProps) {

export default function GenerateButton() {
  return (
    <>
      <Button type="submit">GENERATE!</Button>
    </>
  );
}
