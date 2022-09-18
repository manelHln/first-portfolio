import Heading from "../heading/Heading";
import "./skills.css";
import {
  html,
  css,
  js,
  node,
  sass,
  python,
  postman,
  git,
  react,
  jquery,
  expressjs,
  wordpress,
  linux,
  mongodb,
  bootstrap,
  mui,
  mysql,
} from "../../assets";

const SkillBox = (props) => {
  return (
    <div className="skills__box">
      <div className="skills__box--section-one">
        <img src={props.src} alt="icon" className="skills__icon" />
        <span className="skills__box--text">{props.lang}</span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
        <Heading text="Have a look at" title="My Skills" />
        <div>
          <div className="skills__box-container">
            <SkillBox lang="HTML5" src={html} star={3} />
            <SkillBox lang="CSS3" src={css} />
            <SkillBox lang="BOOTSTRAP" src={bootstrap} />
            <SkillBox lang="SASS" src={sass} />
            <SkillBox lang="MUI5" src={mui} />
            <SkillBox lang="JAVASCRIPT" src={js} />
            <SkillBox lang="JQUERY" src={jquery} />
            <SkillBox lang="REACTJS" src={react} />
            <SkillBox lang="NODEJS" src={node} />
            <SkillBox lang="EXPRESSJS" src={expressjs} />
            <SkillBox lang="PYTHON" src={python} />
            <SkillBox lang="MONGODB" src={mongodb} />
            <SkillBox lang="MYSQL" src={mysql} />
            <SkillBox lang="MONGOOSE" src={css} />
            <SkillBox lang="GIT" src={git} />
            <SkillBox lang="WORDPRESS" src={wordpress} />
            <SkillBox lang="LINUX" src={linux} />
            <SkillBox lang="postman" src={postman} />
          </div>
        </div>
      </div>
    </div>
  );
}