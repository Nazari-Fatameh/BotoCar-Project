import styles from "./Layout.module.css";
import Link from "next/link";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Boto Car</h2>
          <p>Choose and Buy Your Car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://botostart.ir" target="_blank">
          BotoStart
        </a>{" "}
        Next.js Courses | Botocar Project &copy;
      </footer>
    </>
  );
}

export default Layout;
