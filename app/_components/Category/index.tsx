import type { Category } from '@/app/_libs/microcms';
import { Span } from 'next/dist/trace';

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
  return (
    <span className="bg-bg-sub px-1 py-3 rounded-(--border-radius) whitespace-nowrap text-base">
      {category.name}
    </span>
  );
}
