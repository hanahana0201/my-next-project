export default function NotFound() {
  return (
    <div className="relative bg-white w-210 -mt-10 mx-auto mb-0 py-40 px-20 rounded-(--border-radius)">
      <dl>
        <dt className="text-[2rem] text-center font-bold font-family-systemui">
          ページが見つかりませんでした
        </dt>
        <dd className="text-base text-center">
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
