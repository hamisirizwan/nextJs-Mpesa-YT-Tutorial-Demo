"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
// import { ModeToggle } from '../mode-toggle'
import { AlignRight } from "lucide-react";
import useAppStore from "@/stores/appStore";
import { ThemeToggle } from "../theme-toggle";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function LandingPageNav() {
  const { scrollYProgress } = useScroll();
  const [scrollYProgressHeight, setScrollYProgressHeight] = useState(0);

  const { toggleMobileSideBar: onOpen } = useAppStore();

  const handleOnOpen = () => {
    onOpen();
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYProgressHeight(Math.ceil(latest));
  });

  const { data: session } = useSession();

  return (
    <motion.nav
      className={cn(
        "relative",
        scrollYProgressHeight >= 1 &&
          "backdrop-blur-sm bg-white/45 dark:bg-background/45 fixed top-0 right-0 z-20 left-0 w-full"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex h-24 items-center">
          <Link className="items-center gap-2" href="/">
            <span className="font-heading tracking-tight text-3xl font-bold">
              NextSaasStarter
            </span>
          </Link>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
            <Link
              className="inline-block  hover:text-teal-400 mr-10"
              href="/ai-chat"
            >
              AI chat page
            </Link>
            <Link
              className="inline-block  hover:text-teal-400 mr-10"
              href="/landing-page"
            >
              Landing Page Components
            </Link>
            <Link
              className="inline-block  hover:text-teal-400 mr-10"
              href="/blogs"
            >
              Blog Layout
            </Link>
          </div>
          <div className="lg:hidden ml-auto flex gap-3">
            <ThemeToggle />

            <div className="mt-2">
              <AlignRight onClick={() => handleOnOpen()} />
            </div>
          </div>
          <div className="hidden lg:flex ml-auto items-center">
            <ThemeToggle />
            {!session ? (
              <>
                {" "}
                <Link
                  className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center  hover:text-teal-400 font-semibold transition duration-200"
                  href="/login"
                >
                  Signin
                </Link>
                <Link
                  className="group inline-block justify-center p-1 text-center text-sm  font-semibold rounded-lg ransform hover:-translate-y-1 transition duration-400"
                  href="/register"
                >
                  <div className="inline-flex text-white items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                    <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                      <span>Get Started</span>
                    </div>
                  </div>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name
                  ? session?.user?.name
                  : session?.user?.email}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}
                <Link
                  className="group inline-block justify-center p-1 text-center text-sm  font-semibold rounded-lg ransform hover:-translate-y-1 transition duration-400"
                  href="/account/dashboard"
                >
                  <div className="inline-flex text-white items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                    <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                      <span>Dashboard</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
