function SectionTitle({ children, alignSelf }) {
  const words = children.split(" ");
  // To separate the last word for easier styling

  return (
    <span
      className={`font-secondary text-xl font-medium ${
        alignSelf === "end" ? "self-end" : "self-start"
      }`}
    >
      {words.slice(0, -1).join(" ")}
      <strong className="font-bold text-red-500"> {words.slice(-1)}</strong>
    </span>
  );
}

export default SectionTitle;
