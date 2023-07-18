import React from "react";

const AuthInput = ({
  register,
  type = "text",
  name,
  autocomplete,
  required,
  placeholder = "",
}) => {
  return (
    <input
      id={name}
      name={name}
      {...register(name) }
      type={type}
      autoComplete={autocomplete}
      placeholder={placeholder}
      required={required}
      className={`appearance-none border rounded w-full py-2 px-3 bg-gray-100 focus:bg-white focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline`}
    />
  );
};

export default AuthInput;
