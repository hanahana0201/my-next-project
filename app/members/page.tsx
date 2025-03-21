import { url } from 'inspector';

const data = {
  contents: [
    {
      id: '1',
      image: {
        url: '/img-member1.jpg',
        width: 240,
        height: 240,
      },
      name: 'デイビッド・チャン',
      position: 'CEO',
      profile: 'プロフィールが入ります。',
    },
    {
      id: '2',
      image: {
        url: '/img-member2.jpg',
        width: 240,
        height: 240,
      },
      name: 'デイビッド・チャン',
      position: 'CCO',
      profile: 'プロフィールが入ります。',
    },
    {
      id: '3',
      image: {
        url: '/img-member3.jpg',
        width: 240,
        height: 240,
      },
      name: 'デイビッド・チャン',
      position: 'CEO',
      profile: 'プロフィールが入ります。',
    },
  ],
};

export default function Page() {
  return (
    <div className="m-5">
      <h1>メンバーページ</h1>
    </div>
  );
}
