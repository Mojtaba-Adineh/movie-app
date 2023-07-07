import React from "react";
import { useField } from "formik";

const CustomInput = ({id , type , placeholder , ...props}) => {

  const [field, meta] = useField(props);

  return (
    <div className="formGroup">
      <input
        {...field}
        id={id}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <p className="error-message">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default CustomInput;
