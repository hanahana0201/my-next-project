type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div className="relative bg-white w-210 -mt-10 mx-auto mb-0 p-20 rounded-2">
      {children}
    </div>
  );
}
