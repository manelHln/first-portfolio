import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__container">
        <p>© All Right Reserved {year} </p>
      </div>
    </div>
  );
}
