import Image from "next/image";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CEO",
      profile: "プロフィールが入ります。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・サンダース",
      position: "CCO",
      profile: "プロフィールが入ります。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ウィルソン",
      position: "CTO",
      profile: "プロフィールが入ります。",
    },
  ],
};

export default function Page() {
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
