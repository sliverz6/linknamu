import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "GitHub", url: "https://github.com/", icon: "🐙" },
  { label: "LinkedIn", url: "https://linkedin.com/", icon: "💼" },
  { label: "Blog", url: "https://example.com/", icon: "✍️" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-8 px-4 py-12">
      <ProfileHeader name="김클로" bio="세계 최강 바이브코더" />
      <div className="flex w-full flex-col gap-3">
        {links.map((link) => (
          <LinkCard key={link.label} {...link} />
        ))}
      </div>
    </main>
  );
}
