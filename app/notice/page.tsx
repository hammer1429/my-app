import Link from "next/link";

export default async function NoticePage() {
    const notices = await getNotices();
    return(
        <div className="flex-1 bg-slate-50">
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
                <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
                    공지사항
                </h1>
            </div>
        </div>
    )
}
