import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menyala App",
  description: "Social Media App made by drian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 select-none`}>
        <Provider>
          <main className="min-h-screen flex bg-white max-w-[500px] mx-auto">
            {children}
          </main>
        </Provider>
        <Toaster duration={1000} />
      </body>
    </html>
  );
}
