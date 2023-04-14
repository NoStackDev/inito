import React from "react";

type Props = {};

export const metadata = {
  title: "inito",
  description: "Track your fertility hormone at home, in 5 minutes",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:grid md:grid-cols-2">
      {children}
    </main>
  );
}
