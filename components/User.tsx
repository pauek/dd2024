import Image from "next/image";

type User = {
  fullName: string;
  email: string;
  avatar: string;
};
export default function User({ fullName, email, avatar }: User) {
  return (
    <div className="bg-white border rounded-lg shadow w-fit flex flex-row align-center p-2 pr-3 gap-2">
      <div className="relative w-10 h-10">
        <Image
          src={avatar}
          alt="user avatar"
          fill={true}
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{fullName}</p>
        <p className="font-mono text-xs opacity-60">{email}</p>
      </div>
    </div>
  );
}
