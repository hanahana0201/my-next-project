import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/Buttonlink";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div>
        <ButtonLink
          href="/news"
          className="mt-8 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          ニュース一覧へ
        </ButtonLink>
      </div>
    </>
  );
}
