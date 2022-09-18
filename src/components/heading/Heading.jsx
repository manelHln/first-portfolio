import "./heading.css";

export default function Heading(props) {
  return (
    <>
      <div className="heading">
        <hr className="heading__bar" />
        <span className="heading__text">{props.text}</span>
      </div>
      <h2 className="heading__title">{props.title}</h2>
    </>
  );
}
