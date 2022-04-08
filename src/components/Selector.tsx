import styled from "styled-components";
import GenerateButton from "./GenerateButton";
import { Colors, Shadows } from "../globalStyles";
import { useState, useEffect, FormEvent } from "react";
import Results from "./Results";
import { Phonemes } from "../content/Phonemes";

const Form = styled.form`
  font-size: 1.4rem;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   border: 2px red solid;
  height: 100%;
  label {
    margin-right: 5px;
    margin-left: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: 600px) {
      flex-direction: row;
    }
  }
  label {
  }
  select {
    padding: 10px 20px;
    margin: 5px;
    border-radius: 7px;
    border: 2px solid #bbb;
    font-size: 1.2rem;
    box-shadow: ${Shadows.standard2};
  }

  select:hover {
    box-shadow: ${Shadows.redgold1};
  }
`;
export default function Selector() {
  const [syllables, setSyllables] = useState({
    first: 1,
    last: 1,
  });

  const [generated, setGenerated] = useState(false);
  const [regen, setRegen] = useState(false);

  const [answer, setAnswer] = useState("");

  const handleGenerate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGenerated(true);
    const { first, last } = event.target as typeof event.target & {
      first: { value: string };
      last: { value: string };
    };

    let answerFirst = "";
    let answerLast = "";
    let firstNum = Number(first.value);
    let lastNum = Number(last.value);

    const rand1 = () => {
      return Phonemes.first[Math.floor(Math.random() * Phonemes.first.length)];
    };

    const rand2 = () => {
      return Phonemes.last[Math.floor(Math.random() * Phonemes.last.length)];
    };

    const capitalise = (word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };

    switch (firstNum) {
      case 2:
        answerFirst += capitalise(rand1()) + "-" + capitalise(rand1());
        break;
      case 3:
        let a = capitalise(rand1());
        let b = capitalise(rand1());
        answerFirst += `${a}-${b} "${a.slice(0, 2)}${b.slice(0, 2)}"`;
        break;
      default:
        answerFirst += capitalise(rand1());
    }

    const vonner = () => {
      let r = Math.random() * 10;
      console.log(r);
      if (r > 8) {
        return "von ";
      } else if (r < 1) {
        return "auf der ";
      } else {
        return "";
      }
    };
    switch (lastNum) {
      case 2:
        answerLast += vonner() + capitalise(rand2()) + rand2();
        break;
      case 2:
        answerLast += capitalise(rand2()) + rand2() + rand2();
        break;
      default:
        answerLast += vonner() + capitalise(rand2());
    }

    setAnswer(answerFirst + " " + answerLast);
  };

  return (
    <>
      <section>
        <Form onSubmit={(event) => handleGenerate(event)}>
          <div>
            <label htmlFor="first">First name:</label>
            <select name="first" id="first">
              <option value="1">1 words</option>
              <option value="2">2 words</option>
              <option value="3">3 words</option>
            </select>

            <label htmlFor="last">Last name:</label>
            <select name="last" id="last">
              <option value="1">1 words</option>
              <option value="2">2 words</option>
              <option value="3">3 words</option>
            </select>
          </div>
          <div>
            {!generated ? (
              <GenerateButton />
            ) : (
              <Results
                generated={generated}
                setGenerated={setGenerated}
                regen={regen}
                setRegen={setRegen}
                answer={answer}
              />
            )}
          </div>
        </Form>
      </section>
    </>
  );
}
