import styles from "./Footer.module.css";

export default function Footer({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
