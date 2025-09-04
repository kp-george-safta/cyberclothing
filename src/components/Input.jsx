import React from "react";

const Input = ({ label, type, id, placeholder, onChangeFn, validation }) => {
  const [showError, setShowError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  return (
    <>
      <div className="custom-input">
        <label style={{ display: 'block' }} htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          className="log-input"
          placeholder={placeholder}
          required={true}
          onChange={(e) => {
            const value = e.target.value;
            console.log("value", value.length);
            if (value.length < 3) {
              setShowError(true);
              setMessage("Length too small");
            } else if (type === "email") {
              const isValid = value.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
              isValid
                ? (onChangeFn(value), setShowError(false))
                : (setShowError(true), setMessage("Invalid Email"));
            } else {
              setShowError(false);
              onChangeFn(value);
            }
          }}
        />
        {showError ? (
          <div className="input-error">
            <p style={{ color: "red" }}>{message}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Input;
