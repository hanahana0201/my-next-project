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
      <p className="text-[0.9rem] text-text-sub my-6 mx-0 text-left]">
        {data.description}
      </p>
      <div className="flex justify-start items-center shrink-1 gap-6 mb-16">
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          className="w-full h-auto mb-16"
          src={data.thumbnail.url}
          alt={data.thumbnail.alt ?? ""}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className="*:first:mt-0 
    [&>h2]:text-[1.6rem] [&>h2]:font-bold [&>h2]:mt-[2.8rem] [&>h2]:mb-4 [&>h2]:mx-0 
    [&>h3]:text-[1.4rem] [&>h3]:font-bold [&>h3]:mt-[2.8rem] [&>h3]:mb-4 [&>h3]:mx-0 
    [&>h4]:text-[1.2rem] [&>h4]:font-bold [&>h4]:mt-[2.8em] [&>h4]:mb-4 [&>h4]:mx-0 
    [&>h5]:text-[1.1rem] [&>h5]:font-bold [&>h5]:mt-[2.8rem] [&>h5]:mb-4 [&>h5]:mx-0 
    [&>p]:my-8 [&>p]:mb-2 [&>p]:mx-0 
    leading-8 
    [&>pre]:overflow-x-auto 
    [&pre>code]:bg-bg-code [&pre>code]:block [&pre>code]:overflow-x-auto [&pre>code]:p-4 
    [&div[data-filename]]:before:inline-block [&div[data-filename]]:before:bg-bg-sub [&div[data-filename]]:before:content-[attr(data-filename)] [&div[data-filename]]:before:mt-4 [&div[data-filename]]:before:mb-0 [&div[data-filename]]:before:mx-0 [&div[data-filename]]:before:font-[menlo] [&div[data-filename]]:before:text-[0.8rem] [&div[data-filename]]:before:py-1 [&div[data-filename]]:before:px-4 [&div[data-filename]]:before:rounded-t-[var(--border-radius)] [&div[data-filename]]:before:rounded-b-0 
    [&ul]:my-2 [&ul]:mr-0 [&ul]:mb-8 
    [&ol]:my-2 [&ol]:mr-0 [&ol]:mb-8 
    [&>ul]:my-8! [&>ol]:my-8! 
    [&ul>li]:list-decimal [&ol>li]:list-decimal 
    [&li]:my-2 [&li]:mx-0 
    [&a]:underline 
    [&>figure>img]:max-w-full [&>figure>img]:h-auto [&>figure>img]:my-8 [&>figure>img]:mx-0 
    [&>strong]:font-bold 
    [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-8 [&>blockquote]:mx-0
    [&>hr]:my-16 [&>hr]:h-[1px] [&>hr]:bg-border [&>hr]:border-0
    [&>table]:w-full [&>table]:my-8
    [&>table>thead>tr>th]:bg-bg-sub [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:p-4
    [&>table>tbody>tr>td]:text-left [&>table>tbody>tr>td]:p-4
    max-sm:w-full
    max-sm:[&>h1]:text-[1.5rem] max-sm:[&>h1]:font-bold max-sm:[&>h1]:border-b max-sm:[&>h1]:border-border max-sm:[&>h1]:mt-[2.8rem] max-sm:[&>h1]:mb-4
    max-sm:[&>h2]:text-[1.4rem] max-sm:[&>h2]:font-bold max-sm:[&>h2]:mt-[2.8rem] max-sm:[&>h2]:mb-4
    max-sm:[&>h3]:text-[1.3rem] max-sm:[&>h3]:font-bold max-sm:[&>h3]:mt-[2.8rem] max-sm:[&>h3]:mb-4
    max-sm:[&>h4]:text-[1.2rem] max-sm:[&>h4]:font-bold max-sm:[&>h4]:mt-[2.8rem] max-sm:[&>h4]:mb-4
    max-sm:[&>h5]:text-[1.1rem] max-sm:[&>h5]:font-bold max-sm:[&>h5]:mt-[2.8rem] max-sm:[&>h5]:mb-4"
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
