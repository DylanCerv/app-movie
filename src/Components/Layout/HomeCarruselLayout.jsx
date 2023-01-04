import React from "react";

export default function HomeCarruselLayout({ children, title }) {
  return (
    <section className="bg-section flex flex-col gap-5 p-2 rounded-lg min-[600px]:p-10 lg:bg-transparent lg:py-2">
      <h1 className="text-[var(--yellow)] uppercase text-start text-lg mb-2 md:text-2xl">{title}</h1>
      <div>{children}</div>
    </section>
  );
}
