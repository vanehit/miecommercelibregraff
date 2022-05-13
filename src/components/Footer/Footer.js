import React, { Component } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="Email">
          <a
            className="Social__Email"
            href="libregraff@gmail.com"
            target="blank"
          >
            <AlternateEmailIcon
              color="success"
              fontSize="large"
              className="Social__Icons"
            />
          </a>
          <a
            className="Social-Whatsaap"
            href="https://api.whatsapp.com/send?phone=+5493516539975"
            target="blank"
          >
            <WhatsAppIcon
              color="success"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2022 Copyright
          <a href="libregraff@gmail.com" target="blank">
            {" "}
            Libregraff
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
