import useInput from "../hooks/use-hook";
const SimpleInput = (props) => {
  const {
    value: nameValue,
    isValid: isNameValid,
    hasError: nameHasError,
    setValue: setNameValue,
    setTouched: setNameTouched,
    reset: resetName,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    setValue: setEmailValue,
    setTouched: setEmailTouched,
    reset: resetEmail,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

  let isFormValid = false;
  if (isNameValid && isEmailValid) {
    isFormValid = true;
  }

  const formSubmitted = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log("Form submitted");
    resetName();
    resetEmail();
  };
  return (
    <form onSubmit={formSubmitted}>
      <div className={nameHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={setNameValue}
          onBlur={setNameTouched}
        />
        {nameHasError && (
          <p className="error-text">Please enter a valid name.</p>
        )}
      </div>
      <div className={emailHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={setEmailValue}
          onBlur={setEmailTouched}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
