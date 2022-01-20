import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBar from "../_partials/SearchBar";
import { LogoutIcon, MoonIcon, UserIcon } from "@heroicons/react/outline";

export default function DashboardTopNavBar() {
  const [{ avatar, name, username }, setUserData] = useState({
    avatar: undefined,
    name: undefined,
    username: undefined,
  });

  useEffect(() => {
    const UserData = localStorage.getItem("userData");
    if (UserData) {
      const { avatar, name, username } = JSON.parse(UserData || "");
      setUserData({ avatar, name, username });
    }
  }, []);

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

      <span className="dropdown relative self-center">
        <div className="rounded flex font-medium space-x-2 text-xs px-2 text-dark-50 items-center hover:(bg-gray-100 text-primary cursor-pointer) ">
          <div
            className="bg-contain bg-center rounded-full bg-gray-200 h-8 w-8 overflow-hidden"
            style={{ backgroundImage: `url(${avatar})` }}
          />
          <div className="font-medium hidden md:block">{name}</div>
        </div>

        <nav
          className="bg-white border rounded shadow-xl ring-dark origin-top right-0 w-48 dropdown-menu absolute hidden overflow-hidden focus:outline-none"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          role="menu"
        >
          <Link href="#/profile">
            <a className="border-b flex space-x-2 bg-gray-100 text-xs text-left w-full py-2 px-4 text-dark-900 items-center hover:bg-primary-lighter hover:text-white">
              <img src={avatar} className="rounded-full h-10 w-10" alt="me" />
              <div>
                <div className="font-medium text-sm capitalize">{name}</div>
                <div className="pt-0.5">@{username}</div>
              </div>
            </a>
          </Link>

          <button className="flex text-dark text-xs text-left w-full py-3 px-4 items-center hover:bg-primary-lighter hover:text-white">
            <MoonIcon className="h-4 mr-2 w-4" />
            <div>Dark Mode</div>
          </button>

          <button
            onClick={() => logout()}
            className="border-t flex text-dark text-xs text-left w-full py-3 px-4 items-center hover:bg-primary-lighter hover:text-white"
          >
            <LogoutIcon className="h-4 mr-2 w-4" />
            <div>Logout</div>
          </button>
        </nav>
      </span>
    </nav>
  );
}

interface Props {
  avatar?: string;
  name?: string;
}
