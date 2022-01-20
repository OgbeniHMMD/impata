import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBar from "../_partials/SearchBar";
import ProfileDropdown from "../_partials/ProfileDropdown";

export default function DashboardTopNavBar() {
  const [{ avatar, name, username }, setUserData] = useState({
    avatar: "",
    name: "",
    username: "",
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

      <ProfileDropdown avatar={avatar} name={name} username={username} />
    </nav>
  );
}

interface Props {
  avatar?: string;
  name?: string;
}
