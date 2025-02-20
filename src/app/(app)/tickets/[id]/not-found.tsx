import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, UserRoundX } from "lucide-react";
import Link from "next/link";

export default function TicketNotFoundPage() {
  return (
    <main className="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-accent-foreground">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/tickets">
            <Button>Back to tickets</Button>
          </Link>
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
