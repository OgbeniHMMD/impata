import Link from "next/link";
import DashboardCourseCard from "../../components/Dashboard/DashboardCourseCard";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function DashboardHome() {
  return (
    <DashboardLayout title="Dashboard" alias="dashboard">
      <section className="grid py-4 gap-4 grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCourseCard />
        <DashboardCourseCard />
        <DashboardCourseCard />
        <DashboardCourseCard />
        <DashboardCourseCard />
        <DashboardCourseCard />
      </section>
    </DashboardLayout>
  );
}
