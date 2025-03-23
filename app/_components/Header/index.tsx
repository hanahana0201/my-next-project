import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className="absolute pt-4 pb-6 px-2 z-1000 flex items-center justify-between w-full max-sm:pt-6 max-sm:pb-4">
      <Link className="flex" href="/">
        <Image
          className="h-6 w-auto"
          src="/logo.svg"
          alt="SIMPLE"
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
