import Head from "next/head";
import Link from "next/link";

export default function LoginPage(props: any) {
  return (
    <div className="bg-gradient-to-br from-primary-lighter to-primary-light font-poppins min-h-screen text-dark-100">
      <Head>
        <title>Impata - Login</title>
      </Head>

      <main className="flex min-h-full p-4 justify-center items-center md:(min-h-screen)">
        <section className="bg-white border rounded mx-auto max-w-screen-sm w-full overflow-hidden">
          <nav className="flex font-black -my-[2px] text-lg justify-between">
            <a className="cursor-pointer flex-grow -mx-[2px] text-center p-4 text-gray-500 w-1/2 md:p-6 hover:(bg-primary text-light-300) ">
              LOGIN
            </a>
            <a className="cursor-pointer flex-grow bg-light-300 border-3 shadow-inner -mx-[2px] text-center p-4 text-gray-400 w-1/2 md:p-6">
              SIGNUP
            </a>
          </nav>

          <section className="mx-auto max-w-screen-sm p-8">
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

            <div className="">
              <img
                src="/images/auth-page/learning-and-development.png"
                className="h-auto mx-auto w-64"
                alt=""
              />
            </div>

            <form className="py-12">
              <div className="">
                <div className="bg-white -mt-3 text-sm ml-4 px-2 text-gray-500 absolute">
                  Email/Username
                </div>
                <div className="border rounded overflow-hidden">
                  <input className="bg-transparent text-sm w-full p-4 text-dark-50" />
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-white -mt-3 text-sm ml-4 px-2 text-gray-500 absolute">
                  Password
                </div>
                <div className="border rounded overflow-hidden">
                  <input className="bg-transparent text-sm w-full p-4 text-dark-50" />
                </div>
              </div>

              <div className="flex space-x-4 text-xs py-2 justify-between md:text-sm">
                <a className="cursor-pointer text-primary hover:underline">
                  Forgot your password?
                </a>
                <a className="cursor-pointer text-primary hover:underline">
                  Resend verification mail
                </a>
              </div>

              <div className="flex py-12 justify-center">
                <Link href="/dashboard">
                  <a className="bg-primary rounded cursor-pointer font-medium min-w-full text-center text-white py-3 transition md:min-w-sm md:px-16 hover:bg-primary-light">
                    LOGIN
                  </a>
                </Link>
              </div>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
