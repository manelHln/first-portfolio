import "./header.css";
import TypeWriterEffect from "react-typewriter-effect";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <p className="hey--p">Hey, my name is</p>
        <p className="name--p">
          Emmanuel{" "}
          <span
            style={{
              backgroundColor: "#81AFDD",
              color: "#df505c",
              filter: "opacity(80%)",
            }}
          >
            Holonou
          </span>
          .
        </p>
        <TypeWriterEffect
          startDelay={100}
          textStyle={{
            fontSize: "3.5rem",
            color: "#81afdd",
            filter: "opacity(60%)",
            fontWeight: 500
          }}
          cursorColor="#df505c"
          multiText={[
            "I am a full stack web developer.",
            "I build things for the web.",
          ]}
          multiTextDelay={3000}
          typeSpeed={100}
        />
        <p className="intro--p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          excepturi dolorem modi voluptatibus explicabo eos incidunt, ex
          adipisci at, nemo totam eaque. Libero placeat a earum enim laborum nam
          suscipit?
        </p>
        <a href="https://www.google.com" className="header__btn">
          Get in touch <i className="fa fa-envelope-o" />
        </a>
      </div>
    </div>
  );
}
