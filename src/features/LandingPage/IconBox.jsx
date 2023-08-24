import React from "react";

function IconBox({ children, type, objectPosition }) {
  return type === "icon" ? (
    <div className="z-10 w-max rounded-lg bg-neutral-400 p-2.5">
      {React.cloneElement(children, { size: 40, color: "#0a0a0a" })}
    </div>
  ) : (
    <div className="relative z-10 h-[60px] w-[60px] shrink-0 rounded-lg ">
      <img
        src={children}
        alt="Testimonial profile picture"
        className={`h-full w-full rounded-lg object-cover ${
          objectPosition ? objectPosition : ""
        }`}
      />
    </div>
  );
}

export default IconBox;
