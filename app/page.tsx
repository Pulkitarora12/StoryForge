import Link from "next/link";
import { getSession } from "@/lib/auth";
import { ArrowRight, CheckCircle } from "lucide-react";

export default async function LandingPage() {
  const user = await getSession();

  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-4rem)] py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center">
      {/* Center Hero Block */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6 max-w-2xl my-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider">
          Powered by Gemini 2.5 Flash
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Forge Your Stories with <span className="text-primary">StoryForge</span>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Upload any illustration or animation, enter a prompt, and watch as our AI creates a custom, beautifully structured 10-page storybook.
        </p>

        {/* Unified Auth Actions (replacing previous feature rectangles) */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {user ? (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md text-sm"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md text-sm"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 hover:scale-105 active:scale-95 transition-all duration-200 border border-border text-sm"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Info Block Footer (Compact, single-screen-safe configuration) */}
      <div className="w-full border-t border-border/60 pt-4 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-foreground">Try StoryForge Today</h4>
          <p className="text-xs text-muted-foreground max-w-md">
            Designed for writers, creators, educators, and story lovers. Craft rich, unique books instantly.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-foreground/80 font-semibold">
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-primary" />
            Dual-connection Neon DB
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-primary" />
            Gemini 2.5 Flash Vision
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-primary" />
            Secure UUID Session Auth
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-primary" />
            In-place Tiptap V3 Editing
          </li>
        </ul>
      </div>
    </div>
  );
}
