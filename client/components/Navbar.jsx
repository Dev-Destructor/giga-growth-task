import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    await router.push("/api/auth/signin");
  };

  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Welcome {session?.user?.name}
        </a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-xs sm:btn-sm md:btn-md bg-neutral"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
