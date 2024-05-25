import React from "react";

function Button({ children, color }) {
  return (
    <div>
      <button className={`btn1 ${color}`}>{children}</button>
    </div>
  );
}

export default Button;
