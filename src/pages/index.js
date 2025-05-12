import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World Changing this alone does nothing.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
