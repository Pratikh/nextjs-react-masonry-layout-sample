import React from "react";
import Link from "next/link";

const nav = [
  {
    name: "Demo 1",
    link: "/demo1",
  },
  {
    name: "Demo 2",
    link: "/demo2",
  },
  {
    name: "Demo 3",
    link: "/demo3",
  },
  {
    name: "Demo 4",
    link: "/demo4",
  },
  {
    name: "Demo 5",
    link: "/demo5",
  },
  {
    name: "Demo 6",
    link: "/demo6",
  },
  {
    name: "Demo 7",
    link: "/demo7",
  },
  {
    name: "Demo 8",
    link: "/demo8",
  },
];

export default function Header() {
  return (
    <div>
      <h1>Loading Effects for Grid Items</h1>
      <h2>with CSS Animations</h2>
      <div>
        {nav.map((data) => (
          <Link href={data.link} key={data.name}>
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
