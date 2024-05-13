import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
import clsx from "clsx";
import { landingConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: landingConfig.name,
    template: `%s - ${landingConfig.name}`,
  },
  description: landingConfig.description,
  // icons: {
  //   icon: "/images/favicon.ico", //in public/images/favicon.ico
  // },
  // or -----
  icons: {
    icon: {
      url: "/favicon.ico",
    },
    // icon: "/favicon.ico",
  },
};

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans-arabic",
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={clsx(arabic.variable, "min-h-screen w-full")}>
        {children}
      </body>
    </html>
  );
}
