import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";

export default function NotFoundGlobalPage() {
  return (
    <main className="grid place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8 min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-base font-semibold text-accent-foreground">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="#">
            <Button variant="link" className="text-primary-foreground">
              Contact support
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
