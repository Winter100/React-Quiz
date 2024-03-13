export default function SubTitle({
  text,
  size = "3rem",
  color = "black",
}: {
  text: string;
  size?: string;
  color?: string;
}) {
  return <h2 style={{ fontSize: size, color }}>{text}</h2>;
}
