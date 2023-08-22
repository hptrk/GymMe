function Button({ children }) {
  return (
    <button className="rounded-sm bg-red-500 px-5 py-2.5 text-xl text-neutral-50 shadow-sm hover:bg-red-600 ">
      {children}
    </button>
  );
}

export default Button;
