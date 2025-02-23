"use client";

import { usePathname } from "next/navigation";
import "@/app/_common/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentRoute: string = usePathname();

  return (
    <html lang="en">
      <body>
        <h1>Header</h1>
        <main>{children}</main>
        <h1>Footer</h1>
      </body>
    </html>
  );
}
