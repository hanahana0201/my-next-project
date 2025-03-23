import Image from "next/image";

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="relative flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-white overflow-hidden py-25 px-0 max-sm:py-30 max-sm:px-4">
      <div>
        <h1 className="text-5xl font-bold text-center mb-4 max-sm:text-[2rem] max-sm:text-left">
          {title}
        </h1>
        <p className="flex items-center gap-5 mb-10 justify-center before:content-[''] before:block before:h-[1px] before:w-5 before:bg-text-unpainted after:content-[''] after:block after:h-[1px] after:w-5 after:bg-text-unpainted">
          {sub}
        </p>
      </div>
      <Image
        src="/img-mv.jpg"
        className="absolute top-0 right-0 w-full h-150 object-cover object-right flex items-center justify-center -z-1 max-sm:w-auto"
        alt=""
        width={4000}
        height={1200}
      />
    </section >
  );
}
