import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-primary-light to-primary h-screen">
      <Head>
        <title>Impata</title>
        <meta name="description" content="Powered by Today's Solution" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex h-full p-4 justify-center items-center">
        <section className="bg-white border rounded mx-auto max-w-screen-md w-full overflow-hidden">
          <nav className="flex font-black -my-[2px] text-lg justify-between">
            <a className="cursor-pointer flex-grow -mx-[2px] text-center p-4 text-gray-500 w-1/2 md:p-6 hover:(bg-primary text-light-300) ">
              LOGIN
            </a>
            <a className="cursor-pointer flex-grow bg-light-300 border-3 shadow-inner -mx-[2px] text-center p-4 text-gray-400 w-1/2 md:p-6">
              SIGNUP
            </a>
          </nav>
          <section className="p-8">
            <div className="pb-4">
              <Link href="/">
                <a>
                  <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="mx-auto h-12 w-auto"
                  />
                </a>
              </Link>
            </div>

            <div className="pb-8">
              <img
                src="/images/auth-page/learning-and-development.png"
                className="h-auto mx-auto w-64"
                alt=""
              />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
