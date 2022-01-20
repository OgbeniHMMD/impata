import { useState } from "react";
import DashboardTodoCard from "./DashboardTodoCard";

const todos = [
  {
    slug: "#/module/1",
    title: "Module 1 Quiz",
    points: 50,
    course: "Introduction to physics",
    dateTime: "Apr 20, 2020 at 11:59 PM",
  },
  {
    slug: "#/module/2",
    title: "Module 1 Quiz",
    points: 20,
    course: "Introduction to computer",
    dateTime: "Apr 21, 2022 at 12:00 PM",
  },
  {
    slug: "#/module/2",
    title: "Quiz: Vocational Eduction",
    points: 100,
    course: "History Of Education 1",
    dateTime: "Apr 20, 2020 at 11:59 PM",
  },
  {
    slug: "#/module/3",
    title: "Test: Probability",
    points: 33,
    course: "Descriptive Statistics",
    dateTime: "Apr 20, 2021 at 11:59 PM",
  },
  {
    slug: "#/module/1",
    title: "Module 1 Quiz",
    points: 50,
    course: "Introduction to physics",
    dateTime: "Apr 20, 2020 at 11:59 PM",
  },
  {
    slug: "#/module/2",
    title: "Module 1 Quiz",
    points: 20,
    course: "Introduction to computer",
    dateTime: "Apr 21, 2022 at 12:00 PM",
  },
  {
    slug: "#/module/2",
    title: "Quiz: Vocational Eduction",
    points: 100,
    course: "History Of Education 1",
    dateTime: "Apr 20, 2020 at 11:59 PM",
  },
  {
    slug: "#/module/3",
    title: "Test: Probability",
    points: 33,
    course: "Descriptive Statistics",
    dateTime: "Apr 20, 2021 at 11:59 PM",
  },
];

export default function DashboardTodoSection() {
  const [limit, setLimit] = useState(4);
  const remainingTodos = todos.length - limit;

  return (
    <section className="h-full shadow-xl p-4 md:(px-8 w-1/4 overflow-auto pb-20) ">
      <header className="border-b font-medium text-xl pb-2">TO-DO</header>

      {todos.slice(0, limit).map((todo, i) => (
        <DashboardTodoCard
          key={i}
          slug={todo.slug}
          title={todo.title}
          points={todo.points}
          dateTime={todo.dateTime}
        />
      ))}

      {!!remainingTodos && (
        <nav className="text-center p-4">
          <button
            onClick={() => setLimit(todos.length)}
            className="rounded cursor-pointer text-primary text-sm py-2 px-4 hover:(bg-gray-100 text-primary-light cursor-pointer) "
          >
            View {remainingTodos} more assignments
          </button>
        </nav>
      )}
    </section>
  );
}
