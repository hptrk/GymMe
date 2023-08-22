import React from "react";

function IconBox({ children }) {
  return (
    <div className="w-max rounded-lg bg-neutral-400 p-3">
      {React.cloneElement(children, { size: 35, color: "#0a0a0a" })}
    </div>
  );
}

export default IconBox;
