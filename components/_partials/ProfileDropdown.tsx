import { LogoutIcon, MoonIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function ProfileDropdown({ avatar, name, username }: Props) {
  return (
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
          //   onClick={() => logout()}
          className="border-t flex text-dark text-xs text-left w-full py-3 px-4 items-center hover:bg-primary-lighter hover:text-white"
        >
          <LogoutIcon className="h-4 mr-2 w-4" />
          <div>Logout</div>
        </button>
      </nav>
    </span>
  );
}

interface Props {
  avatar: string;
  name: string;
  username: string;
}
