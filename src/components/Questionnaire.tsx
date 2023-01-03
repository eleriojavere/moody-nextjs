import React, { useEffect } from "react";
import { useForm } from "../context/FormContext";
import MoodStep from "./MoodStep";

export default function Questionnaire() {
  const { activeStepIndex, changeActiveStepIndex } = useForm();
  let stepContent;

  switch (activeStepIndex) {
    case 0:
      stepContent = <MoodStep />;
      break;
    case 1:
      stepContent = (
        <>
          <div>jee 2</div>
          <button onClick={() => changeActiveStepIndex(2)}>next</button>
        </>
      );
      break;
    case 2:
      stepContent = (
        <>
          <div>jee 3</div> <button>finish</button>
        </>
      );
      break;
    default:
      stepContent = null;
      break;
  }

  return stepContent;
}
