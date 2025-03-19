import Image from "next/image";
import Link from "next/link";

import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li
          className="border-b border-b-border-ligth last:border-b-0"
          key={article.id}
        >
          <Link
            href={`/news/${article.id}`}
            className="flex items-start gap-10 py-6 px-0"
          >
            <Image
              className="w-50 h-auto rounded-(--border-radius)"
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
            <dl>
              <dt className="text-[1.1rem] font-bold mb-2">{article.title}</dt>
              <dd className="flex items-center gap-4">
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
