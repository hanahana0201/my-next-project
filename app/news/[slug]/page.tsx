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
      <div className="flex justify-end border-t border-t-border mt-20 pt-10">
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
