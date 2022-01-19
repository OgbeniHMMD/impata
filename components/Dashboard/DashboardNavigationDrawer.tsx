import Link from "next/link";

export default function DashboardNavigationDrawer() {
  return (
    <aside className="border flex bg-light-300 rounded-t-3xl shadow-xl text-sm w-full bottom-0 gap-4 overflow-hidden justify-between fixed md:(rounded-none border-none shadow-inner relative flex-col order-first max-w-28 py-4) ">
      <section className="border-b flex w-full gap-4 justify-between md:(flex-col pb-4) ">
        <NavCard />
        <NavCard />
        <NavCard />
      </section>

      <section className="border-t bg-gray-100 w-full gap-4 hidden md:(flex-col pt-4 pb-32 flex) ">
        <NavCard />
        <NavCard />
      </section>
    </aside>
  );
}

export function NavCard() {
  return (
    <Link href="#">
      <a className="border-primary border-t-4 p-2 group md:(border-t-0 border-r-4 px-4 py-0) ">
        <img
          src="/icons/dashboard.svg"
          className="mx-auto h-8 w-8 filter grayscale group-hover:(grayscale-0)"
          alt="icon"
        />
        <div className="text-center pt-1 group-hover:(text-primary)">
          Dashboard
        </div>
      </a>
    </Link>
  );
}
