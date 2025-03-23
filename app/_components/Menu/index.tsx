import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      <nav className="max-sm:hidden">
        <ul className="flex text-white gap-10">
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <button className="hidden max-sm:flex max-sm:bg-none border-none cursor-pointer" >
        <Image src="/menu.svg" alt=" メニュー" width={24} height={24} />
      </button>
    </div>
  );
} 
