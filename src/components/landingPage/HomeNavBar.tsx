import { auth } from "@/auth";
import Link from "next/link";

import Image from "next/image";
import { Button } from "../ui/button";
import Logout from "../shell/Logout";

const HomeNavBar = async () => {
  const session = await auth();
  return (
    <nav className="border-b bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link className="font-bold" href="/">
          Home
        </Link>

        <div className="flex items-center gap-x-5">
            {session?.user?.email}
        </div>

        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <>
            <Link href="/login">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
                Login
              </div>
            </Link>
            <Link href="/register">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">
                Register
              </div>
            </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}
              </div>
              <Button>
              <Logout />
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;