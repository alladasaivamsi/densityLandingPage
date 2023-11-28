import React from "react";
import densityLogo from "../../../public/assests/logo.png";
import facebook from "../../../public/assests/facebook.png";
import twitter from "../../../public/assests/twitter.png";
import linkedin from "../../../public/assests/linkedin.png";
import instagram from "../../../public/assests/instagram.png";
import { Link } from "gatsby";
import {
  FooterData,
  FooterLogo,
  FooterLogos,
  FooterLinks,
} from "../../ComponentStyles/Component.styled.js";

const Footer = () => {
  return (
    <FooterData>
      <FooterLogo>
        <img src={densityLogo} alt="densityLogo" />
        &nbsp;
        <h1>density</h1>
      </FooterLogo>
      <FooterLinks>
        <p>Blog</p>
        <p>Fees</p>
        <p>Leaderboard</p>
        <p>Careers</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      </FooterLinks>
      <p>
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
        pesask vyfisat. Viktiga poddradio har un mad och inde.
      </p>
      <FooterLogos>
        <Link to="/">
          <FooterLogo>
            <img src={facebook} />
          </FooterLogo>
        </Link>
        <Link to="/">
          <FooterLogo>
            <img src={twitter} />
          </FooterLogo>
        </Link>
        <Link to="/">
          <FooterLogo>
            <img src={linkedin} />
          </FooterLogo>
        </Link>
        <Link to="/">
          <FooterLogo>
            <img src={instagram} />
          </FooterLogo>
        </Link>
      </FooterLogos>
    </FooterData>
  );
};

export default Footer;
