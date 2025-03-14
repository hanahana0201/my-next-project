import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-white overflow-hidden py-50 px-0 max-sm:py-30 max-sm:px-4">
      <div>
        <h1 className="text-5xl font-bold text-center mb-4 max-sm:text-[2rem] max-sm:text-left">
          テクノロジーの力で世界を変える
        </h1>
        <p className="text-center max-sm:text-[0.9rem] max-sm:text-left">
          私たちは市場をリードするグローバルテックカンパニーです。
        </p>
      </div>
      <Image
        className="absolute top-0 right-0 w-full h-150 object-cover object-right flex items-center justify-center z-[-1] max-sm:w-auto"
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
