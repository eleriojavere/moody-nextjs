import { useEffect, useState } from "react";
import { useForm } from "../context/FormContext";
import PrimaryButton from "./PrimaryButton";

export default function FormStepIndicator() {
  const { activeStepIndex, changeActiveStepIndex, selectedMood, submitForm } =
    useForm();
  const [stepperCount, setStepperCount] = useState(0);

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    setStepperCount(stepperItems.length - 1);
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);

  const handleClick = () => {
    if (activeStepIndex === stepperCount) {
      submitForm();
    } else {
      changeActiveStepIndex(activeStepIndex + 1);
    }
  };

  return (
    <div className="flex justify-between items-end">
      {activeStepIndex !== 0 && (
        <PrimaryButton
          onClick={() => changeActiveStepIndex(activeStepIndex - 1)}
        >
          previous
        </PrimaryButton>
      )}
      <div className="w-1/3 flex flex-row items-center ">
        <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
          1
        </div>
        <div className="flex-auto border-t-2"></div>
        <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
          2
        </div>
        <div className="flex-auto border-t-2"></div>
        <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
          3
        </div>
      </div>
      <div className="flex justify-end">
        <PrimaryButton isDisabled={!selectedMood} onClick={handleClick}>
          {stepperCount !== activeStepIndex ? "next" : "submit"}
        </PrimaryButton>
      </div>
    </div>
  );
}
