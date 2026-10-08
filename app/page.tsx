import Link from "next/link";
import { getTeams } from "@/lib/team";

export default async function Home() {
  const teams = await getTeams();

  return (
    <main className="flex-1 bg-slate-50">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.22),_transparent_45%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#082f49_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-16 -z-10 size-80 rounded-full border border-white/10 sm:right-10 sm:size-[26rem]"
        />
        <div
          aria-hidden="true"
          className="absolute right-4 top-28 -z-10 size-52 rounded-full border border-white/10 sm:right-28 sm:top-36 sm:size-64"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3.5 py-2 text-xs font-bold tracking-[0.16em] text-sky-200">
              <span className="size-2 rounded-full bg-sky-300" />
              KOREA BASEBALL ORGANIZATION
            </span>
            <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-7xl">
              숫자로 만나는
              <br />
              <span className="text-sky-300">야구의 재미</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              KBO STATS에서 구단별 정보를 한눈에 확인하고,
              <br className="hidden sm:block" />
              좋아하는 팀의 이야기를 시작해 보세요.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/teams"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 text-sm font-extrabold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                구단 둘러보기
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#teams"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                팀 바로 찾기
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-sky-200">
                    LEAGUE GUIDE
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold">
                    KBO 구단 가이드
                  </h2>
                </div>
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-2xl bg-sky-300/10 text-2xl"
                >
                  ⚾
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-5">
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-sm text-slate-400">참여 구단</p>
                  <p className="mt-2 text-3xl font-black">
                    {teams.length}
                    <span className="ml-1 text-base font-semibold text-slate-400">
                      CLUBS
                    </span>
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-sm text-slate-400">둘러보기</p>
                  <p className="mt-2 text-3xl font-black">
                    01
                    <span className="ml-1 text-base font-semibold text-slate-400">
                      STEP
                    </span>
                  </p>
                </div>
              </div>

              <Link
                href="/teams"
                className="flex items-center justify-between rounded-2xl bg-sky-300 px-4 py-4 text-sm font-extrabold text-slate-950 transition hover:bg-sky-200"
              >
                전체 구단 목록 보기
                <span aria-hidden="true" className="text-lg">
                  ↗
                </span>
              </Link>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              팀을 선택하면 구단 프로필을 확인할 수 있어요.
            </p>
          </div>
        </div>
      </section>

      <section
        id="teams"
        aria-labelledby="teams-heading"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-sky-700">
              MEET THE CLUBS
            </p>
            <h2
              id="teams-heading"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              어떤 팀을 응원하세요?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              구단을 선택해 팀 프로필을 살펴보세요.
            </p>
          </div>
          <Link
            href="/teams"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-sky-700"
          >
            전체 팀 목록
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teams.map((team) => (
            <li key={team.id}>
              <Link
                href={`/teams/${team.id}`}
                className="group flex min-h-24 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <span className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-slate-100 font-mono text-sm font-bold text-slate-500 transition group-hover:bg-sky-100 group-hover:text-sky-800">
                    {team.id.padStart(2, "0")}
                  </span>
                  <span className="font-bold text-slate-900">{team.name}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-600"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-extrabold tracking-[0.18em] text-sky-700">
            NOTICE
          </p>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              최신 공지사항
            </h2>
            <Link
              href="/notice"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-sky-700"
            >
              전체 공지사항으로 이동
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
