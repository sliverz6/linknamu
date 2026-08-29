import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";

const links = [
  { id: "github", label: "GitHub", url: "https://github.com/", icon: "🐙" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/", icon: "💼" },
  { id: "blog", label: "Blog", url: "https://example.com/", icon: "✍️" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-10 px-6 py-16">
      <ProfileHeader
        name="김개발"
        bio="풀스택 개발자 | 요즘에는 ai 개발에 관심이 많아요"
        avatarUrl="https://placehold.co/200x200"
      />
      <LinkList links={links} />
    </main>
  );
}
