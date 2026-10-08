import Link from "next/link";
import { getTeams } from "@/lib/team";

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <main className="flex-1 bg-slate-50">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.22),transparent_45%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#082f49_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-36 -z-10 size-80 rounded-full border border-white/10 sm:right-12 sm:size-104"
        />
        <div
          aria-hidden="true"
          className="absolute right-8 top-20 -z-10 size-48 rounded-full border border-white/10 sm:right-32 sm:top-28 sm:size-64"
        />

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3.5 py-2 text-xs font-bold tracking-[0.16em] text-sky-200">
            <span className="size-2 rounded-full bg-sky-300" />
            KBO CLUB DIRECTORY
          </p>
          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
                KBO 구단
                <span className="text-sky-300"> 한눈에 보기</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                응원하는 팀을 선택해 구단 정보와 한국시리즈 우승 기록을 확인해
                보세요.
              </p>
            </div>
            <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-xl bg-sky-300/10 text-2xl"
              >
                ⚾
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-slate-400">
                  REGISTERED CLUBS
                </p>
                <p className="mt-1 text-2xl font-black">
                  {teams.length}
                  <span className="ml-1 text-sm font-bold text-slate-400">
                    구단
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="team-list-heading"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16"
      >
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-sky-700">
              ALL CLUBS
            </p>
            <h2
              id="team-list-heading"
              className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
            >
              구단 목록
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            카드를 선택하면 구단 프로필로 이동합니다.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <li key={team.id}>
              <Link
                href={`/teams/${team.id}`}
                className="group flex min-h-36 items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-slate-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:p-6"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 font-mono text-sm font-bold text-slate-500 transition group-hover:bg-sky-100 group-hover:text-sky-800">
                    {team.id.padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-lg font-extrabold text-slate-950">
                      {team.name}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-slate-400">
                      KBO CLUB
                    </span>
                  </span>
                </span>

                <span className="flex shrink-0 flex-col items-end">
                  <span className="text-[11px] font-bold tracking-wide text-slate-400">
                    한국시리즈 우승
                  </span>
                  <span className="mt-1 text-xl font-black tabular-nums text-amber-600">
                    {team.championCount}
                    <span className="ml-0.5 text-sm font-bold">회</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-sm text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-600"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
