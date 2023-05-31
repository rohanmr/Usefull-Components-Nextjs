import Link from "next/link";
import Styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbarContainer}>
        <Link href="/" className={Styles.brand}>
          Compos
        </Link>
        <div className={Styles.links}>
          <Link href="/home" className={Styles.link}>
            Home
          </Link>
          <Link href="/products" className={Styles.link}>
            Cards
          </Link>
          <Link href="/cart" className={Styles.link}>
            Buttons
          </Link>
          <Link href="/about" className={Styles.link}>
            Footers
          </Link>
        </div>
        <div className={Styles.authButtons}>
          <button className={Styles.logoutButton}>Login</button>
          <button className={Styles.logoutButton}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
