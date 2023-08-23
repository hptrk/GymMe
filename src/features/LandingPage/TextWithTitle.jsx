function TextWithTitle({ title, text }) {
  return (
    <div className="flex flex-col">
      <span className="font-secondary text-xl  text-red-300">{title}</span>
      <span className="text-m font-light leading-5">{text}</span>
    </div>
  );
}

export default TextWithTitle;
