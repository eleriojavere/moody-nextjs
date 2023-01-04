import React, { useEffect } from "react";
import { useForm } from "../context/FormContext";
import MoodStep from "./MoodStep";

export default function Questionnaire() {
  const { activeStepIndex } = useForm();
  let stepContent;

  switch (activeStepIndex) {
    case 0:
      stepContent = <MoodStep />;
      break;
    case 1:
      stepContent = <div> Step 2</div>;
      break;
    case 2:
      stepContent = <div>Step 3</div>;
      break;
    default:
      stepContent = null;
      break;
  }

  return stepContent;
}
