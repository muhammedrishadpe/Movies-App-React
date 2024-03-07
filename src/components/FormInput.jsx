import React from "react";

export const FormInput = ({ id, type, placeholder, email, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder} //Inputs components
      value={email}
      onChange={onChange}
    />
  );
};
