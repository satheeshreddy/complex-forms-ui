import { useState } from "react";

const useInput = (validator) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const touchHandler = () => {
    setTouched(true);
  };
  const resetHandler = () => {
    setValue("");
    setTouched(false);
  };
  const isValid = validator(value);

  return {
    value,
    isValid,
    hasError: !isValid && touched,
    setValue: valueChangeHandler,
    setTouched: touchHandler,
    reset: resetHandler,
  };
};

export default useInput;
