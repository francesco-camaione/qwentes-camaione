import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_div}>


        <Link href="/">
          <Image src="/images/logo-bp.png" width={150} height={85} alt="logo, click to go home page" className={styles.logo} priority={true} />
        </Link>
        <div className={styles.link_container}>
          <Link href="/tour" className={styles.a}>Tour</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
