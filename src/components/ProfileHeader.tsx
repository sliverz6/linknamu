type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="h-28 w-28 overflow-hidden rounded-full bg-stone-200 shadow-sm ring-4 ring-white dark:bg-neutral-800 dark:ring-neutral-900">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-stone-500 dark:text-neutral-300">
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-neutral-50">
          {name}
        </h1>
        <p className="text-sm leading-relaxed text-stone-500 dark:text-neutral-400">{bio}</p>
      </div>
    </div>
  );
}
