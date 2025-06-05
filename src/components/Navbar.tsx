'use client';

import Image from "next/image";

export default function Navbar() {
  //const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 text-white bg-primary border-b-1 border-black">
      <div className="text-2xl font-bold">Quem me deve?</div>
      {(
        <div className="flex items-center gap-4">
          <span className="text-sm">{'user.name'}</span>
          <button
            //onClick={logout}
            className="hover:opacity-80"
          >
            <Image
              src="/profile-icon.svg"
              alt="Logout"
              width={32}
              height={32}
              className="rounded-full"
            />
          </button>
        </div>
      )}
    </nav>
  );
}