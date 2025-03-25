import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div>
      {data.contents.length === 0 ? (
        <p className="mb-10">メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li
              key={member.id}
              className="flex items-start gap-10 mb-20 even:flex-row-reverse"
            >
              <Image
                className="w-60 h-auto rounded-(--border-radius)"
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className="text-[1.2rem] font-bold">{member.name}</dt>
                <dd className="mb-2">{member.position}</dd>
                <dd className="text-[0.9rem]">{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
