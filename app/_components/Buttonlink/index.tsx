type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Buttonlink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="block py-5 px-10 rounded-(--border-radius) w-75 bg-[url(/arrow-right.svg)] bg-no-repeat bg-[right_20px_center]"
    >
      {children}
    </a>
  );
}
