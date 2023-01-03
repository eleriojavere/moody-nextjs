import React, { ReactElement, useContext, useEffect, useState } from "react";

export interface FormContextInterface {
  activeStepIndex: number;
  changeActiveStepIndex: (value: number) => void;
}

export const FormContext = React.createContext<FormContextInterface>({
  activeStepIndex: 0,
  changeActiveStepIndex: () => {},
});

export function FormProvider({ children }: { children: ReactElement }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const changeActiveStepIndex = (value: number) => {
    setActiveStepIndex(value);
  };

  const value = {
    activeStepIndex,
    changeActiveStepIndex,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useForm() {
  return useContext(FormContext);
}
