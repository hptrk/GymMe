// Parent container has to be relatively positioned

// FOR POSITION TESTING:
// <div className="absolute left-5 top-16 h-12 w-12 bg-red-500"></div>
function BlurryLight({ positions, translateY }) {
  return (
    <div
      className={`${positions}
      ${translateY ? "translate-y-[-50%]" : ""}
      absolute !m-0 h-12 w-12 bg-red-500/40 blur-2xl`}
    ></div>
  );
}

export default BlurryLight;
