import "./contact.css";
import Heading from "../heading/Heading";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <Heading text="Send me" title="A Message" />
        <form action="" className="contact__form">
          <div className="contact__form--section-one">
            <input type="text" placeholder="Full Name Or Company Name" className="contact-form__input" />
            <input type="email" placeholder="Your Email Address" className="contact-form__input" />
          </div>
          <div className="contact__form--section-two">
            <input type="text" placeholder="Your Message" className="contact-form__input" />
          </div>
          <input type="submit" className="contact-form__input--btn" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
