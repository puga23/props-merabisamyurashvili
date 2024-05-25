import React from "react";

function Button({ name, children }) {
  return (
    <div>
      <button className={name}>{children}</button>
    </div>
  );
}

export default Button;
