import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="/js.png"
        alt="JS Logo"
        width={150}
        height={150}
      />
      <h1 className={styles.title}>
        <span>JavaScript</span>
        <span className={styles.plus}> + </span>
        <span>React</span>
        <span> 문제풀기!</span>
      </h1>
      <img
        className={styles.logo}
        src="/React.png"
        alt="React Logo"
        width={150}
        height={150}
      />
    </div>
  );
}
