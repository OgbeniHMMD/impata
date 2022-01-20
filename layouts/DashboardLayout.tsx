import axios from "axios";
import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
import DashboardNavigationDrawer from "../components/Dashboard/DashboardNavigationDrawer";
import DashboardTodoSection from "../components/Dashboard/DashboardTodoSection";
import DashboardTopNavBar from "../components/Dashboard/DashboardTopNavBar";
import SearchBar from "../components/_partials/SearchBar";

export default function DashboardLayout({ children, title, alias }: Props) {
  const [userData, setUserData] = useState({
    id: undefined,
    name: undefined,
    token: undefined,
    avatar: undefined,
    domain: undefined,
    username: undefined,
    isAdmin: undefined,
    privateSchoolID: undefined,
    profileImage: undefined,
  });

  const fetchAvatar = async (payload: UserDataInterface) => {
    if (!!!userData?.avatar)
      await axios
        .get(
          `https://lmsapi.impata.com/useraccount/getuserprofileimage?userid=${
            payload?.id || 36
          }`
        )
        .then((response) => {
          const avatar = response?.data?.url;
          const UserData = JSON.stringify({ ...payload, avatar });
          localStorage.setItem("userData", UserData);
        });
  };

  useEffect(() => {
    const UserData = localStorage.getItem("userData");

    if (!!!UserData) Router.replace("/");
    else {
      const payload = JSON.parse(UserData);
      setUserData(payload);
      fetchAvatar(payload);
    }
  }, []);

  return (
    <div className="font-poppins text-dark-100">
      <Head>
        <title>Impata - {title}</title>
      </Head>

      <section className="flex flex-col justify-between md:(overflow-hidden h-screen max-h-screen) ">
        <DashboardTopNavBar />

        <main className="flex flex-col h-full justify-between md:flex-row">
          <div className="p-4 pb-0 md:hidden">
            <SearchBar />
          </div>

          <section className="flex-grow flex flex-col h-full justify-between md:(overflow-y-auto flex-row) ">
            <section className="flex-grow h-full p-4 md:px-8 ">
              <header className="border-b font-medium text-xl pb-4">
                {title}
              </header>
              <div>{children}</div>
            </section>
          </section>

          <DashboardTodoSection />
          <DashboardNavigationDrawer alias={alias} />
        </main>
      </section>
    </div>
  );
}

interface Props {
  children: any;
  title: string;
  alias: string;
}

interface UserDataInterface {
  id: number;
  name: string;
  token: string;
  avatar: string;
  domain: string;
  username: string;
  isAdmin: boolean;
  privateSchoolID: number;
  profileImage: string;
}
