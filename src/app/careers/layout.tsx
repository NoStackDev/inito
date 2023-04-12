export const metadata = {
  title: "inito | careers",
  description: "Work at inition",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-secondary/white">{children}</main>;
}
