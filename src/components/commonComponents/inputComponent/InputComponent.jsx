import "./InputComponent.css";

export default function InputComponent({
  type,
  text,
  placeholderText,
  setValue,
  value,
}) {
  return (
    <div>
      <label for={text} className="label">
        {text}
      </label>
      <input
        type={type}
        id={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        placeholder={placeholderText}
        required
      />
    </div>
  );
}
