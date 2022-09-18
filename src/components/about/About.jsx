import Heading from "../heading/Heading";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <Heading text="Wanna know more" title="About me?" />
        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam hic delectus fuga nihil. Possimus quaerat et veritatis quo quisquam. Modi quaerat provident dolorem illo dignissimos. Quo, quia suscipit? Corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit amet non fuga optio nobis, neque doloribus, itaque ea illo, placeat blanditiis necessitatibus officiis cumque? Provident magnam possimus porro id?</p>
      </div>
    </div>
  );
}