"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import useAppStore from "@/stores/appStore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function MobileMenu() {
  const { isMobileSideBarOpen: isOpenMenu, toggleMobileSideBar: onClose } =
    useAppStore();

  const { data: session } = useSession();

  return (
    <Sheet open={isOpenMenu} onOpenChange={() => onClose()}>
      <SheetContent side="right">
        <nav className="relative flex flex-col py-6 px-3 w-full h-full bg-white dark:bg-background overflow-y-auto">
          <div className="flex mb-auto items-center">
            <a className="inline-block mr-auto text-3xl font-bold" href="#">
              NextSaasStarter
            </a>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <Link
                  className="inline-block text-black dark:text-white dark:hover:text-emerald-500"
                  href="/ai-chat"
                >
                  Ai chat page
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  className="inline-block text-black dark:text-white dark:hover:text-emerald-500"
                  href="/landing-page"
                >
                  Landing Page Components
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  className="inline-block text-black dark:text-white dark:hover:text-emerald-500"
                  href="/blogs"
                >
                  Blog  Layout
                </Link>
              </li>
            </ul>
          </div>
          {!session ? (
            <div>
              <Link
                className="flex items-center justify-center h-12 mb-4 px-4 text-center text-base text-gray-700 dark:text-white dark:hover:text-black font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200"
                href="/login"
              >
                Signin
              </Link>

              <Link
                className="group flex justify-center items-center p-1 text-center text-sm text-white font-semibold rounded-lg"
                href="/register"
              >
                <div className="flex items-center justify-center h-10 w-full p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                  <div className="flex items-center px-4 group-hover:bg-opacity-40 rounded-md transition duration-300">
                    <span>Get Started</span>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-y-2">
              <div className="flex gap-x-2 col-reverse">
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}

                {session?.user?.name
                  ? session?.user?.name
                  : session?.user?.email}
              </div>
              <Link
                className="group inline-block justify-center p-1 text-center text-sm  font-semibold rounded-lg ransform hover:-translate-y-1 transition duration-400 w-full"
                href="/account/dashboard"
              >
                <div className="inline-flex text-white items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800 w-full">
                  <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                    <span>Dashboard</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
