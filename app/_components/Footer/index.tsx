import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-4 px-6 text-center text-text-sub text-[0.8rem] mt-20">
      <nav className="mb-4">
        <ul className="flex justify-center gap-10 text-base whitespace-nowrap max-sm:flex-wrap max-sm:gap-y-2 max-sm:gap-x-0">
          <li className="max-sm:w-1/2">
            <Link href="/news">ニュース</Link>
          </li>
          <li className="max-sm:w-1/2">
            <Link href="/members">メンバー</Link>
          </li>
          <li className="max-sm:w-1/2">
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p>© SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
