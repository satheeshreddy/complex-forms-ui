import useInput from "../hooks/use-hook";

const isNotEmptyValidator = (value) => value.trim().length > 0;
const isEmailValidator = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    setValue: setFirstNameValue,
    setTouched: setFirstNameTouched,
    reset: resetFirstName,
  } = useInput(isNotEmptyValidator);
  const {
    value: lastNameValue,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    setValue: setLastNameValue,
    setTouched: setLastNameTouched,
    reset: resetLastName,
  } = useInput(isNotEmptyValidator);
  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    setValue: setEmailValue,
    setTouched: setEmailTouched,
    reset: resetEmail,
  } = useInput(isEmailValidator);

  let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log(` First name: ${firstNameValue}
    Last name: ${lastNameValue}
    Email: ${emailValue}`);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div
          className={
            firstNameHasError ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={setFirstNameValue}
            onBlur={setFirstNameTouched}
          />
          {firstNameHasError && (
            <span className="error-text">First name is required</span>
          )}
        </div>
        <div
          className={lastNameHasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={setLastNameValue}
            onBlur={setLastNameTouched}
          />
          {lastNameHasError && (
            <span className="error-text">Last name is required</span>
          )}
        </div>
      </div>
      <div className={emailHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={setEmailValue}
          onBlur={setEmailTouched}
        />
        {emailHasError && (
          <span className="error-text">E-Mail is required</span>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
