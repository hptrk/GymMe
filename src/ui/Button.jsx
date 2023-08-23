function Button({ children, isLastGridItem, type, size }) {
  const types = {
    transparent:
      "rounded-lg border-2 border-red-500  text-neutral-50 hover:bg-red-600",
    full: "rounded-lg border-2 bg-red-500 border-none text-neutral-50 hover:bg-red-600",
  };
  const sizes = {
    small: "px-6 py-0.5 text-lg font-light ",
    big: "w-32 sm:w-40 px-6 py-3 text-xl font-light ",
  };
  return (
    <button
      className={`${isLastGridItem ? "place-self-end" : ""} ${types[type]} ${
        sizes[size]
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
