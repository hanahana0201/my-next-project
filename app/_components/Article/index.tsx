import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className="text-[2.4rem] mb-6 text-left">{data.title}</h1>
      <p>{data.description}</p>
      <div>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt={data.thumbnail.alt ?? ""}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
