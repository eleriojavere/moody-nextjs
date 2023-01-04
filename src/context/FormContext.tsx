import React, { ReactElement, useContext, useEffect, useState } from "react";

export interface FormContextInterface {
  activeStepIndex: number;
  selectedMood: string | null;
  changeActiveStepIndex: (value: number) => void;
  changeMood: (value: string) => void;
}

export const FormContext = React.createContext<FormContextInterface>({
  activeStepIndex: 0,
  selectedMood: null,
  changeActiveStepIndex: () => {},
  changeMood: () => {},
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

  const value = {
    activeStepIndex,
    changeActiveStepIndex,
    selectedMood,
    changeMood,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useForm() {
  return useContext(FormContext);
}
