function Button({ children }) {
  return (
    <button className=" rounded-lg border-2 border-red-500 px-6 py-1 text-lg font-light text-neutral-50 hover:bg-red-600">
      {children}
    </button>
  );
}

export default Button;
