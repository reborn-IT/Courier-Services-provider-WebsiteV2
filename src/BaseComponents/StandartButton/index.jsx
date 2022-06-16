import React from "react";

function StandartButton({ children, styles, extraTailwindClasses = "", clickHandler }) {
  return (
    <button
      type="button"
      className={`become-provider rounded-full text-white w-auto whitespace-nowrap ${extraTailwindClasses}`}
      style={{ ...styles }}
      onClick={() => clickHandler()}
    >
      {children}
    </button>
  );
}

export default StandartButton;
