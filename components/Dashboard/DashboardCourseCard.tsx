import Link from "next/link";
import { DotsVerticalIcon } from "@heroicons/react/outline";

export default function DashboardCourseCard({
  id,
  progress,
  imageUrl,
  courseCode,
  courseTitle,
}: Props) {
  return (
    <Link href={`#/course/${id}`}>
      <a className="rounded-md shadow-lg overflow-hidden">
        <div
          className="bg-no-repeat bg-center bg-cover h-36"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="p-4 ">
          <div className="flex w-full justify-between items-center">
            <div className="flex-grow">
              <div className="text-primary pb-1 capitalize">{courseTitle}</div>
              <div className="text-sm text-gray-700 uppercase">
                {courseCode}
              </div>
            </div>
            <div className="h-full">
              <button className="rounded-full p-1 hover:bg-gray-100">
                <DotsVerticalIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {!!progress && (
            <div className="rounded-full bg-gray-100 h-2 mt-2 w-full">
              <div
                className="bg-gradient-to-r from-primary-lighter via-light to-primary rounded-full h-2"
                style={{ width: progress }}
              />
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}

interface Props {
  id: number;
  progress: number;
  imageUrl: string;
  courseCode: string;
  courseTitle: string;
}
