import React from "react";

export default function HomeCarruselLayout({ children, title }) {
  return (
    <section className="bg-section flex flex-col gap-5 p-10 md:bg-transparent">
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}
