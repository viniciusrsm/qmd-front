import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 text-white bg-primary border-b-1 border-black">
      <div className="text-2xl font-bold">Quem me deve?</div>
      <div>
        <Image
          src="/profile-icon.svg"
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </nav>
  );
}