"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type Link = {
  id: string;
  label: string;
  url: string;
  icon: string;
};

export default function LinkList({ links }: { links: Link[] }) {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((counts) => setClickCounts(counts))
      .catch(() => {});
  }, []);

  const handleLinkClick = (id: string) => {
    setClickCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-3.5">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          clickCount={clickCounts[link.id] ?? 0}
          onLinkClick={() => handleLinkClick(link.id)}
        />
      ))}
    </div>
  );
}
