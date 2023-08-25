function SectionTitle({
  children,
  alignSelf,
  marginLeft,
  fontSize,
  fontWeight,
}) {
  if (!children) return;
  // To separate the last word for easier styling
  const words = children.split(" ");

  return (
    <span
      className={`${marginLeft ? marginLeft : ""}
      ${fontSize ? fontSize : "text-xl"} 
      ${fontWeight ? fontWeight : "font-medium"} 
      font-secondary ${alignSelf ? alignSelf : "self-start"}`}
    >
      {words ? words.slice(0, -1).join(" ") : ""}
      <strong
        className={`${fontWeight ? fontWeight : "font-bold"}  text-red-500`}
      >
        {" "}
        {words.slice(-1)}
      </strong>
    </span>
  );
}

export default SectionTitle;
