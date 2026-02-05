"use client";

type ErrorFallbackProps = {
  title?: string;
  message?: string;
  onRetry: () => void;
};

export function ErrorFallback({
  title = "Something went wrong",
  message = "The request failed. You can try again.",
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-red-400/30 bg-red-950/20 p-10 text-center">
      <span className="mb-4 text-4xl" aria-hidden>
        ⚠️
      </span>
      <h2 className="text-xl font-bold text-red-200">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-white/70">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-lg bg-amber-300/40 px-5 py-2.5 font-semibold text-amber-200 shadow transition-all hover:bg-amber-400/60"
      >
        Try again
      </button>
    </div>
  );
}
