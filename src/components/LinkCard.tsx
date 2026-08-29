type LinkCardProps = {
  label: string;
  url: string;
  icon: string;
  clickCount?: number;
  onLinkClick?: () => void;
};

export default function LinkCard({
  label,
  url,
  icon,
  clickCount = 0,
  onLinkClick,
}: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onLinkClick}
      className="group flex w-full items-center gap-3 rounded-2xl border border-stone-200/80 bg-white px-4 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md active:translate-y-0 active:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-lg dark:bg-neutral-800"
        aria-hidden
      >
        {icon}
      </span>
      <span className="flex-1 text-center text-sm font-medium text-stone-800 dark:text-neutral-100">
        {label}
      </span>
      <span className="w-9 shrink-0 text-right text-[11px] tabular-nums text-stone-400 dark:text-neutral-500">
        {clickCount}회
      </span>
    </a>
  );
}
