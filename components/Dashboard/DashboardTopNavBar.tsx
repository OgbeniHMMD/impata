import Link from "next/link";
import SearchBar from "../_partials/SearchBar";

export default function DashboardTopNavBar() {
  return (
    <nav className="flex shadow p-4 z-20 justify-between items-center">
      <Link href="/">
        <a>
          <img
            src="/images/logo.svg"
            alt="logo"
            className="mx-auto h-8 w-auto"
          />
        </a>
      </Link>

      <div className="max-w-screen-sm w-full hidden md:block">
        <SearchBar />
      </div>

      <div className="rounded flex font-medium space-x-2 text-xs px-2 text-dark-50 items-center hover:(bg-gray-100 text-primary cursor-pointer) ">
        <div
          className="bg-contain bg-center rounded-full bg-gray-100 h-8 w-8 overflow-hidden"
          style={{ backgroundImage: "url(/icons/avatar.png)" }}
        />
        <div className="hidden md:block">Gyoh Whistledown</div>
      </div>
    </nav>
  );
}
