import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_TITLE } from "@/lib/constants";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: APP_TITLE,
    template: `%s | ${APP_TITLE}`,
  },
  description: "Next Saas Starter - Simple nextjs saas starter template with prisma and nextAuth",
  // icons: [{ rel: "icon", url: "/icon.png" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>

    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}

        </Providers>
        
        </body>
    </html>
    </SessionProvider>
  );
}
