"use client";

import { useEffect } from "react";
import { ErrorFallback } from "../components/error/ErrorFallback";

export default function PeopleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <ErrorFallback
        title="Failed to load characters"
        message={error.message || "Could not load characters. You can try again."}
        onRetry={reset}
      />
    </div>
  );
}
