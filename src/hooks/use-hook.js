import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputDispatcher = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { isTouched: state.isTouched, value: action.value };
    case "TOUCH":
      return { isTouched: true, value: state.value };
    case "RESET":
      return initialState;
    default:
      return initialState;
  }
};

const useInput = (validator) => {
  const [state, dispatch] = useReducer(inputDispatcher, initialState);
  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };
  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };
  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };
  const isValid = validator(state.value);

  return {
    value: state.value,
    isValid,
    hasError: !isValid && state.isTouched,
    setValue: valueChangeHandler,
    setTouched: touchHandler,
    reset: resetHandler,
  };
};

export default useInput;
