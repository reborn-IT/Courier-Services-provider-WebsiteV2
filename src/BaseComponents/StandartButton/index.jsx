import React from "react";

function StandartButton({ children, styles, extraTailwindClasses = "", clickHandler }) {
  return (
    <button
      type="button"
      className={`become-provider rounded-full w-5 h-4 text-white w-auto whitespace-nowrap bg-rebornit-primary ${extraTailwindClasses}`}
      style={{ ...styles }}
      onClick={() => clickHandler()}
    >
      {children}
    </button>
  );
}

export default StandartButton;
