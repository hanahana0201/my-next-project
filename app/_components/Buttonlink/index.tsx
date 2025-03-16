type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Buttonlink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="block py-5 px-10 rounded-(--border-radius) w-75 bg-[url(/arrow-right.svg)] bg-no-repeat bg-[right_20px_center] bg-button-primary text-text-unpainted hover:opacity-[0.9] max-sm:py-4 max-sm:px-6 max-sm:w-full"
    >
      {children}
    </a>
  );
}
