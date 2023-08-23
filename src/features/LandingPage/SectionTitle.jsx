function SectionTitle({ children, alignSelf, marginLeft }) {
  if (!children) return;
  // To separate the last word for easier styling
  const words = children.split(" ");

  return (
    <span
      className={`${
        marginLeft ? marginLeft : ""
      } font-secondary text-xl font-medium ${
        alignSelf === "end" ? "self-end" : "self-start"
      }`}
    >
      {words ? words.slice(0, -1).join(" ") : ""}
      <strong className="font-bold text-red-500"> {words.slice(-1)}</strong>
    </span>
  );
}

export default SectionTitle;
