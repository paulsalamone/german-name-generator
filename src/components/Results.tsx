import styled from "styled-components";
import { Button, Colors } from "../globalStyles";
import { Dispatch, SetStateAction } from "react";
import { Phonemes } from "../content/Phonemes";

const ResultsBox = styled.div`
  border: 4px solid ${Colors.charcoal};
  //   margin: 5px;
  padding: 30px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  h1 {
    color: ${Colors.charcoal};
    display: block;
  }
`;

const ResultsButtons = styled.div`
  display: flex;
  flex-direction: row;
  //   border: 2px solid red;
`;

interface Props {
  generated: boolean;
  setGenerated: Dispatch<SetStateAction<boolean>>;
  regen: boolean;
  setRegen: Dispatch<SetStateAction<boolean>>;
  answer: string;
}

// interface GenProps {
//   handleGenerate: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }
// export default function GenerateButton(Props: GenProps) {

export default function Results({
  generated,
  setGenerated,
  regen,
  setRegen,
  answer,
}: Props) {
  const regenerateHandler = () => {
    // alert("Regenerate!");
  };
  const restartHandler = () => {
    setGenerated((prev) => !prev);
    console.log(generated);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>Your German name is:</h4>
      <ResultsBox>
        <div>
          <br />
          <h1>{answer}</h1>
          <h2>{generated}</h2>
        </div>
      </ResultsBox>
      <ResultsButtons>
        <Button onClick={regenerateHandler}>Generate Again</Button>
        <Button onClick={restartHandler}>Start Over</Button>
      </ResultsButtons>
    </div>
  );
}
