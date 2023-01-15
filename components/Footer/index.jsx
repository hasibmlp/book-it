import React from "react";
import s from "./Footer.module.css";

function Footer() {
  return (
    <div className={s.footer}>
      <p>@2023 Abdulla Haseeb, Inc.</p>
      <ul>
        <li>
          <span>.</span> <a href="">Privacy</a>
        </li>
        <li>
          <span>.</span> <a href="">Terms</a>
        </li>
        <li>
          <span>.</span> <a href="">Sitemap</a>
        </li>
        <li>
          <span>.</span> <a href="">Compant Details</a>
        </li>
        <li>
          <span>.</span> <a href="">Destinations</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
