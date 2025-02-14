import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center bg-background">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-medium text-foreground">404</h1>
        <div className="h-[44px] w-px bg-foreground/50" />
        <div>
          <h2 className="text-sm text-foreground">
            This page could not be found.
          </h2>
          <Link
            className="text-sm transition-colors hover:text-foreground/80 text-foreground/60"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
