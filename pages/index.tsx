import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Router from "next/router";

export default function LoginPage(props: any) {
  const { register, handleSubmit, reset } = useForm({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [fetching, setFetching] = useState(false);

  const login = async (payload: Payload) => {
    setErrorMsg(null);
    setFetching(true);

    await axios
      .post("https://lmsapi.impata.com/users/authenticate", payload)
      .then((response) => {
        reset();
        localStorage.setItem("userData", JSON.stringify(response?.data));
        Router.replace("/dashboard");
      })
      .catch((e) => {
        setErrorMsg(
          e?.response?.data.message ||
            "Sorry, an error occured. Please try again"
        );
      })
      .finally(() => setFetching(false));
  };

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

            {!!errorMsg && (
              <div className="border rounded border-l-4 border-red-500 text-sm p-3 text-gray-600 capitalize">
                {errorMsg}
              </div>
            )}

            <form
              className="py-12"
              onSubmit={handleSubmit((data) => login(data))}
            >
              <div className="">
                <div className="bg-white -mt-3 text-sm ml-4 px-2 text-gray-500 absolute">
                  Email/Username
                </div>
                <div className="border rounded overflow-hidden">
                  <input
                    // type="email"
                    className="bg-transparent text-sm w-full p-4 text-dark-50"
                    {...register("username", { required: true })}
                  />
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-white -mt-3 text-sm ml-4 px-2 text-gray-500 absolute">
                  Password
                </div>
                <div className="border rounded overflow-hidden">
                  <input
                    type="password"
                    className="bg-transparent text-sm w-full p-4 text-dark-50"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>

              <div className="flex space-x-4 text-xs py-2 justify-between md:text-sm">
                <a className="cursor-pointer text-primary hover:underline">
                  Forgot your password?
                </a>
                <button className="cursor-pointer text-primary hover:underline">
                  Resend verification mail
                </button>
              </div>

              <div className="flex py-12 justify-center">
                {fetching ? (
                  <LoadingButton />
                ) : (
                  <button
                    type="submit"
                    className="bg-primary rounded cursor-pointer font-medium min-w-full text-center text-white py-3 transition md:(min-w-sm px-16) hover:bg-primary-light "
                  >
                    LOGIN
                  </button>
                )}
              </div>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
}

export function LoadingButton() {
  return (
    <div className="bg-primary-light rounded cursor-not-allowed font-medium min-w-full text-center text-white py-4 transition md:(min-w-sm px-16) ">
      <div className="flex space-x-4 justify-center">
        {[...new Array(3)].map((el, i) => (
          <div
            className="bg-white rounded-full bg-opacity-90 h-3 animate-pulse w-3"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

interface Payload {
  username?: string;
  password?: string;
}
