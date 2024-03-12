export default function SubTitle({
  text,
  size = "3rem",
}: {
  text: string;
  size?: string;
}) {
  return <h2 style={{ fontSize: size }}>{text}</h2>;
}
