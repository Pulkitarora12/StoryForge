import Link from "next/link";
import { getSession } from "@/lib/auth";
import { Sparkles, ArrowRight, UploadCloud, BookOpen, PenTool, CheckCircle } from "lucide-react";

export default async function LandingPage() {
  const user = await getSession();

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <div className="text-center max-w-3xl space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Powered by Gemini 2.5 Flash
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
          Forge Your Stories with <span className="text-primary">StoryForge</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Upload any illustration or animation, enter a prompt, and watch as our AI creates a custom, beautifully structured 10-page storybook.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {user ? (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md text-base"
            >
              Go to Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md text-base"
              >
                Create Your First Book
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sign-in"
                className="flex items-center justify-center px-6 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 hover:scale-105 active:scale-95 transition-all duration-200 border border-border text-base"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-24">
        {/* Step 1 */}
        <div className="p-8 rounded-2xl glass hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 border border-border">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <UploadCloud className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">1. Upload Inspiration</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Directly upload any custom sketch, character illustration, drawing, or animation directly to Cloudinary from your browser.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-8 rounded-2xl glass hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 border border-border">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <PenTool className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">2. Prompt & Configure</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Select the appropriate style tier from 4 parameters (Toddler to Middle Grade), customize keywords, and input story contexts.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-8 rounded-2xl glass hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 border border-border">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">3. Read & Edit Inline</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Flip through the beautifully generated 10-page book. Refine pages inline using the integrated Tiptap rich text editor.
          </p>
        </div>
      </div>

      {/* Info Block */}
      <div className="mt-20 p-8 rounded-2xl bg-secondary/30 border border-border w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-4xl">
        <div className="space-y-2">
          <h4 className="text-xl font-bold">Try StoryForge Today</h4>
          <p className="text-muted-foreground text-base">
            Designed for writers, creators, educators, and story lovers. Craft rich, unique books instantly.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-foreground/80 font-semibold">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Dual-connection Neon DB
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Gemini 2.5 Flash Vision
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Secure UUID Session Auth
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            In-place Tiptap V3 Editing
          </li>
        </ul>
      </div>
    </div>
  );
}
