import React, { ReactElement, useContext, useEffect, useState } from "react";

export interface FormContextInterface {
  activeStepIndex: number;
}

export const FormContext = React.createContext<FormContextInterface>({
  activeStepIndex: 0,
});

export function FormProvider({ children }: { children: ReactElement }) {
  const [activeStepIndex, setActiveStepIndex] = useState<any>(0);

  const value = {
    activeStepIndex,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useForm() {
  return useContext(FormContext);
}
