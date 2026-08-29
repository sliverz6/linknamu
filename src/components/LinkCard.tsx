type LinkCardProps = {
  label: string;
  url: string;
  icon: string;
};

export default function LinkCard({ label, url, icon }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <span className="text-xl" aria-hidden>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  );
}
