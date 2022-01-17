import Head from "next/head";
import Link from "next/link";

export default function DashboardHome() {
  return (
    <div>
      <Head>
        <title>Impata - Dashboard</title>
      </Head>

      <div className="flex flex-col font-poppins h-screen max-h-screen text-dark-100 justify-between">
        <nav className="flex shadow p-4 justify-between items-center">
          <Link href="/">
            <a>
              <img
                src="/images/logo.svg"
                alt="logo"
                className="mx-auto h-8 w-auto"
              />
            </a>
          </Link>

          <div className="rounded max-w-screen-sm bg-gray-100 text-sm w-full">
            <input
              className="bg-transparent w-full p-2 text-dark-50 focus:outline-none"
              placeholder="Search courses or modules"
              type="search"
            />
          </div>

          <div className="rounded flex font-medium space-x-2 text-xs px-2 text-dark-50 items-center hover:(bg-gray-100 text-primary cursor-pointer) ">
            <div
              className="bg-contain bg-center rounded-full bg-gray-100 h-8 w-8 overflow-hidden"
              style={{ backgroundImage: "url(/icons/avatar.png)" }}
            />
            <div>Gyoh Whistledown</div>
          </div>
        </nav>

        <main className="flex flex-col h-full justify-between md:flex-row">
          <section className="flex-grow flex flex-col justify-between overflow-y-auto md:flex-row">
            <section className="flex-grow shadow-md p-4 md:px-8">
              <header className="border-b font-medium text-xl pb-2">
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

            <section className="p-4 md:(px-8 w-1/4) ">
              <header className="border-b font-medium text-xl pb-2">
                TO-DO
              </header>

              <div className="border-b flex flex-col space-y-1 text-sm py-4 group">
                <Link href="#">
                  <a className="font-bold text-primary text-base pb-1 group-hover:text-primary-light">
                    Module 1 Quiz
                  </a>
                </Link>
                <div>Introduction to physics</div>
                <div>50 Points</div>
                <div>Apr 20, 2020 at 11:59 PM</div>
              </div>

              <nav className="text-center p-4">
                <button className="rounded cursor-pointer text-primary text-sm py-2 px-4 hover:(bg-gray-100 text-primary-light cursor-pointer) ">
                  View 6 more assignments
                </button>
              </nav>
            </section>
          </section>

          <aside className="flex bg-gray-100 text-sm py-4 gap-4 justify-between md:(flex-col order-first w-28) ">
            <section className="border-b flex bg-gray-100 gap-4 md:flex-col md:pb-4">
              <Link href="#">
                <a className="border-primary border-r-4 px-4 group">
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
              <div>Courses</div>
              <div>Schools</div>
            </section>

            <section className="border-t flex bg-gray-100 gap-4 md:flex-col md:pt-4 md:pb-20">
              <div>FAQ</div>
              <div>Tutorials</div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}
