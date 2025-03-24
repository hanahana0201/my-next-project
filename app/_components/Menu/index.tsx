"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  return (
    <div>
      <nav
        className={`max-sm:hidden ${
          isOpen
            ? "max-sm:!block max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:bottom-0 max-sm:left-0 max-sm:bg-bg-painted max-sm:text-text-unpainted max-sm:py-6 max-sm:px-4"
            : ""
        }`}
      >
        <ul className="flex text-white gap-10 max-sm:flex-col max-sm:gap-6">
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
        <button
          className="hidden max-sm:flex max-sm:bg-none border-none cursor-pointer max-sm:absolute max-sm:top-6 max-sm:right-4"
          onClick={close}
        >
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button
        className="hidden max-sm:flex max-sm:bg-none border-none cursor-pointer"
        onClick={open}
      >
        <Image src="/menu.svg" alt=" メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
