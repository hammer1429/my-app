import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="주요 메뉴"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="group inline-flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-lg text-sky-300 transition group-hover:bg-sky-800"
          >
            ⚾
          </span>
          <span className="text-base font-black tracking-tight text-slate-950">
            KBO <span className="text-sky-700">STATS</span>
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <span className="hidden text-xs font-medium tracking-wide text-slate-400 sm:inline">
            KOREA BASEBALL ORGANIZATION
          </span>
          <Link
            href="/teams"
            className="inline-flex min-h-10 items-center rounded-lg bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            팀 목록
          </Link>
        </div>
      </nav>
    </header>
  );
}
