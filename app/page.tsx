import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  const slicedDate = data.contents.slice(0, 2);

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
        <ul>
          {slicedDate.map((article) => (
            <li
              className="border-b border-b-border-ligth last:border-b-0"
              key={article.id}
            >
              <div className="flex items-start gap-10 py-6 px-0">
                <Image
                  className="w-50 h-auto rounded-(--border-radius)"
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl>
                  <dt className="text-[1.1rem] font-bold mb-2">
                    {article.title}
                  </dt>
                  <dd className="flex items-center gap-4">
                    <span className="bg-bg-sub px-1 py-3 rounded-(--border-radius) whitespace-nowrap text-base">
                      {article.category.name}
                    </span>
                    <span className="flex items-center gap-2 mx-[0.8rem] my-0 text-base">
                      <Image
                        src="/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
