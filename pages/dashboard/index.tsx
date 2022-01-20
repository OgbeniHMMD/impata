import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import DashboardCourseCard from "../../components/Dashboard/DashboardCourseCard";
import DashboardLayout from "../../layouts/DashboardLayout";

const queryClient = new QueryClient();

export default function DashboardHome() {
  const UserData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userData") || "")
      : "";

  const [fetching, setFetching] = useState(true);
  const [courses, setCourses] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () =>
      await axios
        .get("https://lmsapi.impata.com/modules/getcourseprogressdetails", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${UserData?.token}`,
          },
        })
        .then((response) => setCourses(response?.data || []))
        .catch((e) => setErrorMsg(e?.response?.data?.message))
        .finally(() => setFetching(false)))();
  }, []);

  return (
    <DashboardLayout title="Dashboard" alias="dashboard">
      {courses.length > 0 ? (
        <section className="grid py-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:(grid-cols-3 gap-6) xl:grid-cols-4 ">
          {fetching &&
            [...new Array(4)].map((el, i) => <SkeletonLoader key={i} />)}

          {courses.map((course, i) => (
            <DashboardCourseCard
              key={i}
              id={course?.id}
              progress={course?.progress}
              imageUrl={course?.imageUrl}
              courseCode={course?.courseCode}
              courseTitle={course?.courseTitle}
            />
          ))}
        </section>
      ) : (
        <div>
          <div className="text-lg text-center py-16">
            {errorMsg || "You have courses available"}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export function SkeletonLoader() {
  return (
    <div className="rounded-md h-full mx-auto shadow-lg w-full animate-pulse overflow-hidden">
      <div className="bg-gray-300 h-16" />
      <div className="p-4">
        <div className="rounded-md bg-gray-300 h-6 mb-4 w-full" />
        <div className="rounded-md mx-auto bg-gray-300 h-6 w-24" />
      </div>
    </div>
  );
}
