import Link from "next/link";

export default function DashboardTodoCard() {
  return (
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
  );
}
