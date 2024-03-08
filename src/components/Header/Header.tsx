import styles from "./Haeder.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src="/React.png" alt="React Logo" width={200} height={200} />
      <h1>자바스크립트 + React 20문제!</h1>
    </div>
  );
}
