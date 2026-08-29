type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-gray-500 dark:text-gray-300">
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div>
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
      </div>
    </div>
  );
}
