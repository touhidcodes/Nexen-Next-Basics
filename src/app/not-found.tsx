"use client";

import { Button } from "@/components/ui/button";
import { Ghost, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="flex items-center justify-center h-screen px-4 bg-background text-center">
      <div className="max-w-xl space-y-6">
        <div className="flex justify-center">
          <div className="bg-muted rounded-full p-4 shadow-md">
            <Ghost className="h-12 w-12 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-foreground">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground text-base">
          Oops! The page you&apos;re looking for doesn&apos;t exist, was moved,
          or never existed in the first place.
        </p>

        {/* Centered button */}
        <div className="flex justify-center">
          <Button
            onClick={() => router.push("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
