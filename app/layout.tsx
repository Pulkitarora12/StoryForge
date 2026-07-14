import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { getSession } from "@/lib/auth";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoryForge - AI-Illustrated Children's Books",
  description: "Create AI-illustrated 10-page children's storybooks dynamically from your uploaded drawings, animations, and creative ideas.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.className} antialiased`}>
        <Providers>
          <div className="gradient-bg min-h-screen flex flex-col">
            <Header user={user} />
            <main className="flex-grow flex flex-col">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
