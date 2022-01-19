import Link from "next/link";

export default function DashboardCourseCard() {
  return (
    <Link href="#">
      <a className="rounded-md shadow-lg overflow-hidden">
        <div
          className="h-36"
          style={{ backgroundImage: "url(/images/thumb.png)" }}
        />

        <div className="p-4 ">
          <div className="flex w-full justify-between items-center">
            <div className="flex-grow pb-4">
              <div className="text-primary pb-1 capitalize md:text-lg">
                Introduction to Physics
              </div>
              <div className="text-sm text-gray-700 uppercase">PHY 101</div>
            </div>
            <div className="h-full">
              <button className="rounded-full p-1 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="rounded-full bg-gray-100 h-2 w-full">
            <div
              className="bg-gradient-to-r from-primary-lighter via-light to-primary rounded-full h-2"
              style={{ width: "45%" }}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
