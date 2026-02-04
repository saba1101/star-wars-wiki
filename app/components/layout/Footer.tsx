export function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-white/10 py-8">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm text-white/50">
          Built with{" "}
          <a
            href="https://swapi.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-300/90 underline decoration-amber-300/50 underline-offset-2 transition-colors hover:text-amber-300 hover:decoration-amber-300"
          >
            SWAPI API
          </a>
        </p>
        <p className="text-xs text-white/40">
          Star Wars data © Lucasfilm / Disney. This site is not affiliated.
        </p>
      </div>
    </footer>
  );
}
