import styles from "./Button.module.css";

export default function Button({
  onClick,
  text,
  bgColor = "#FFE5E5",
}: {
  text: string;
  onClick: () => void;
  bgColor?: string;
}) {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
