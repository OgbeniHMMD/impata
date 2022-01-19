import Head from "next/head";
import Link from "next/link";
import DashboardNavigationDrawer from "../../components/Dashboard/DashboardNavigationDrawer";
import DashboardTodoCard from "../../components/Dashboard/DashboardTodoCard";
import DashboardTopNavBar from "../../components/Dashboard/DashboardTopNavBar";
import SearchBar from "../../components/_partials/SearchBar";

export default function DashboardHome() {
  return (
    <div>
      <Head>
        <title>Impata - Dashboard</title>
      </Head>

      <section className="flex flex-col font-poppins text-dark-100 justify-between md:(overflow-hidden h-screen max-h-screen) ">
        <DashboardTopNavBar />

        <main className="flex flex-col h-full justify-between md:flex-row">
          <div className="p-4 pb-0 md:hidden">
            <SearchBar />
          </div>

          <section className="flex-grow flex flex-col h-full justify-between md:(overflow-y-auto flex-row) ">
            <section className="flex-grow h-full p-4 md:px-8 ">
              <header className="border-b font-medium text-xl pb-4">
                Dashboard
              </header>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
              <div className="py-4">QWERTY</div>
            </section>
          </section>

          <section className="h-full shadow-xl p-4 md:(px-8 w-1/4) ">
            <header className="border-b font-medium text-xl pb-2">TO-DO</header>

            <DashboardTodoCard />
            <DashboardTodoCard />
            <DashboardTodoCard />

            <nav className="text-center p-4">
              <button className="rounded cursor-pointer text-primary text-sm py-2 px-4 hover:(bg-gray-100 text-primary-light cursor-pointer) ">
                View 6 more assignments
              </button>
            </nav>
          </section>

          <DashboardNavigationDrawer />
        </main>
      </section>
    </div>
  );
}
