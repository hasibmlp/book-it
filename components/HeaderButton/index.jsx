import s from "./HeaderButton.module.css";
import Link from "next/link";

import React from "react";

function HeaderButton({ title }) {
  return (
    <Link className={s.header_button} href="/login">
      {title}
    </Link>
  );
}

export default HeaderButton;
