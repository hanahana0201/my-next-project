import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import Buttonlink from "@/app/_components/Buttonlink";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
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
          className="absolute top-0 right-0 w-full h-150 object-cover object-right flex items-center justify-center -z-1 max-sm:w-auto"
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className="relative bg-white w-210 -mt-10 mx-auto mb-0 py-6 px-10 rounded-(--border-radius) max-lg:w-[calc(100%-160px)] max-sm:w-[calc(100%-32px)] max-sm:px-4 max-sm:py-6">
        <h2 className="text-2xl font-bold">News</h2>
        <NewsList news={data.contents} />
        <div className="absolute -right-10 -bottom-10 max-sm:relative max-sm:right-auto max-sm:bottom-auto max-sm:mt-4">
          <Buttonlink href="/news">もっとみる</Buttonlink>
        </div>
      </section>
    </>
  );
}
