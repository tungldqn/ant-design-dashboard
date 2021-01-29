import { useReducer } from 'react';

const setStateReducer = (prevState: object, updatedProperty) => {
  return {
    ...prevState,
    ...updatedProperty,
  };
};

export const useMakeState = (initState: object) => {
  const [state, setState] = useReducer(setStateReducer, initState);
  return [state, setState];
};

export const getExpectedValue = (value: any, checkFunction: Function, defaultValue: any) => {
  if (checkFunction(value)) {
    return value;
  }
  return defaultValue;
};
