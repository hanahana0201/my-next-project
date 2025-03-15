type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Buttonlink({ href, children }: Props) {
  return (
    <a href={href} className="block py-5 px-10 rounded-(--border-radius) w-75">
      {children}
    </a>
  );
}
