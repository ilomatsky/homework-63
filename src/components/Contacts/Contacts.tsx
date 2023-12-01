const Contacts = () => {
  return (
    <ul className="contact">
      <li>
        <a className="facebook" href="https://ru-ru.facebook.com/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a className="twitter" href="https://twitter.com/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a className="instagram" href="https://www.instagram.com/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a className="google" href="https://www.google.com/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-google-plus" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
