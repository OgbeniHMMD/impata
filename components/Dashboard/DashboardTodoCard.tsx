import Link from "next/link";

export default function DashboardTodoCard({
  slug,
  title,
  points,
  dateTime,
}: Props) {
  return (
    <div className="border-b flex flex-col space-y-1 text-sm py-4 group">
      <Link href={slug}>
        <a className="font-bold text-primary text-base pb-1 group-hover:text-primary-light">
          {title}
        </a>
      </Link>
      <div>Introduction to physics</div>
      <div>{points} Points</div>
      <div>{dateTime}</div>
    </div>
  );
}

interface Props {
  slug: string;
  title: string;
  points: number;
  dateTime: string;
}
