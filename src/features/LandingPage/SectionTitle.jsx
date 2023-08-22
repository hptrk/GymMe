function SectionTitle({ children, alignSelf }) {
  const words = children.split(" ");
  // To separate the last word for easier styling

  return (
    <span
      className={`${
        alignSelf && `self-${alignSelf}`
      } font-secondary text-xl font-medium `}
    >
      {words.slice(0, -1).join(" ")}
      <strong className="font-black text-red-500"> {words.slice(-1)}</strong>
    </span>
  );
}

export default SectionTitle;
