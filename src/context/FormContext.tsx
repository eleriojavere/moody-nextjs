import React, { ReactElement, useContext, useState } from "react";

export interface FormContextInterface {
  activeStepIndex: number;
  selectedMood: string | null;
  changeActiveStepIndex: (value: number) => void;
  changeMood: (value: string) => void;
  submitForm: (url: string) => void;
}

export const FormContext = React.createContext<FormContextInterface>({
  activeStepIndex: 0,
  selectedMood: null,
  changeActiveStepIndex: () => {},
  changeMood: () => {},
  submitForm: () => {},
});

export function FormProvider({ children }: { children: ReactElement }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedMood, setSelectedMood] =
    useState<FormContextInterface["selectedMood"]>(null);

  const changeActiveStepIndex = (value: number) => {
    setActiveStepIndex(value);
  };

  const changeMood = (value: string) => {
    setSelectedMood(value);
  };

  const submitForm = () => {
    try {
      fetch("").then((res) => {
        console.log("res", res);
      });
    } catch {
      console.log("error");
    }
  };

  const value = {
    activeStepIndex,
    changeActiveStepIndex,
    selectedMood,
    changeMood,
    submitForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useForm() {
  return useContext(FormContext);
}
