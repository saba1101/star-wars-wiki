"use client";

import { useEffect } from "react";
import { ErrorFallback } from "./components/error/ErrorFallback";

export default function Error({
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
        title="Something went wrong"
        message={error.message || "The request failed. You can try again."}
        onRetry={reset}
      />
    </div>
  );
}
