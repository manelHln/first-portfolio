import "./index.css";
import {
  Header,
  Navbar,
  Email,
  SocialMedia,
  Project,
  About,
  Contact,
  Skills,
  Footer,
} from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Header />
      <Email />
      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
