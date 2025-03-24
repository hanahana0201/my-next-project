"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <nav className={`max-sm:hidden ${openMenu ? "max-sm:block max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:bottom-0 max-sm:left-0 ma-sm:bg-bg-painted max-sm:text-text-unpainted max-sm:py-6 max-sm:px-4" : ""}`}>
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
      <button className="hidden max-sm:flex max-sm:bg-none border-none cursor-pointer" onClick={handleMenuOpen} >
        <Image src="/menu.svg" alt=" メニュー" width={24} height={24} />
      </button>
    </div>
  );
} 
