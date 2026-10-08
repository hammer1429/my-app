import { notFound } from "next/navigation";
import Link from "next/link";
import { getTeam } from "@/lib/team";

type TeamDetailPageProps = { params: Promise<{ id: string }> };

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { id } = await params;
  const team = await getTeam(id);

  if (!team) {
    notFound();
  }

  return (
    <main className="flex-1 bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/teams"
          className="group mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950"
        >
          <span
            aria-hidden="true"
            className="transition-transform group-hover:-translate-x-1"
          >
            ←
          </span>
          팀 목록
        </Link>

        <section className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-xl shadow-slate-900/10 sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-28 -z-10 size-80 rounded-full border border-white/10 sm:-right-4 sm:-top-40 sm:size-120"
          />
          <div
            aria-hidden="true"
            className="absolute -right-4 top-12 -z-10 size-44 rounded-full border border-white/10 sm:right-20 sm:top-20 sm:size-64"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-24 -z-10 h-36 w-36 rotate-45 border border-white/10 sm:right-52 sm:h-52 sm:w-52"
          />

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-sky-200">
              <span className="size-1.5 rounded-full bg-sky-300" />
              KBO TEAM PROFILE
            </span>
            <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-slate-400">
              TEAM {team.id.padStart(2, "0")}
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              {team.name}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              팀의 기본 정보를 확인하고, 다른 구단도 둘러보세요.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-8 right-10 hidden size-20 rotate-12 items-center justify-center rounded-full bg-white shadow-lg sm:flex"
          >
            <span className="size-16 rounded-full border-2 border-dashed border-rose-400/70" />
          </div>
        </section>

        <section
          aria-labelledby="team-info-heading"
          className="mt-6 grid gap-6 md:grid-cols-[1.3fr_0.7fr]"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-sky-700">
                  TEAM INFORMATION
                </p>
                <h2
                  id="team-info-heading"
                  className="mt-2 text-xl font-bold text-slate-950"
                >
                  구단 프로필
                </h2>
              </div>
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-2xl bg-sky-50 text-xl"
              >
                ⚾
              </span>
            </div>

            <dl className="mt-7 divide-y divide-slate-100">
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm font-medium text-slate-500">구단명</dt>
                <dd className="text-right text-sm font-bold text-slate-900">
                  {team.name}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm font-medium text-slate-500">
                  우승 횟수
                </dt>
                <dd className="mt-1 text-right text-sm font-bold text-slate-900">
                  {team.championCount}회
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm font-medium text-slate-500">리그</dt>
                <dd className="text-right text-sm font-bold text-slate-900">
                  KBO 리그
                </dd>
              </div>
            </dl>
          </div>

          <aside className="flex flex-col justify-between rounded-3xl bg-sky-100 p-6 sm:p-8">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-sky-800">
                FIND YOUR TEAM
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                다른 구단도
                <br />
                만나보세요
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                전체 구단 목록에서 관심 있는 팀을 찾아볼 수 있어요.
              </p>
            </div>
            <Link
              href="/teams"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
            >
              전체 팀 보기
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
