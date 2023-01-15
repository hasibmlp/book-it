import styles from "./Header.module.css";
import Link from "next/link";
import HeaderButton from "../HeaderButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h2 className={styles.title}>
          <Link href="/">My App</Link>
        </h2>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* <div className={styles.profile}>
        <div className={styles.profile__head}>
          <figure>
            <img src="/img/profile.jpeg" alt="profile" />
          </figure>
          <div>
            <p>Abdulla Haseeb</p>
            <img src="/img/left.png" alt="arrow" />
          </div>
        </div>

        <div className={styles.profile__body}>
          <ul>
            <li>My Booking</li>
            <li>Users</li>
            <li>Logout</li>
          </ul>
        </div>     
      </div> */}

      <div className={styles.login_button}>
        <HeaderButton title="Login" />
      </div>
    </header>
  );
}
