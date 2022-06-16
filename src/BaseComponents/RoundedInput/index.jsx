/* eslint-disable max-len */
import React from "react";

function RoundedInput({
  type = "text",
  placeholder = "sample placeholder",
  onChange,
  extraTailwindClasses = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      className={`border border-drop-primary bg-black-700 rounded-input  w-full ml-2 md:ml-0 flex-1 border-xl rounded-full p-3 mb-4 md:p-4 text-sm md:text-base ${extraTailwindClasses}`}
    />
  );
}

export default RoundedInput;
