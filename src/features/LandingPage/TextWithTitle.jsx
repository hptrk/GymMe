function TextWithTitle({ title, text }) {
  return (
    <div className="flex flex-col">
      <span className="font-secondary text-red-300">{title}</span>
      <span>{text}</span>
    </div>
  );
}

export default TextWithTitle;
