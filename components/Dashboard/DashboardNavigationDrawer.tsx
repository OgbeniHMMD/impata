import Link from "next/link";

const Links = [
  [
    {
      alias: "dashboard",
      title: "Dashboard",
      slug: "/dashboard",
      icon: "/icons/dashboard.svg",
    },
    {
      alias: "courses",
      title: "Courses",
      slug: "/dashboard/courses",
      icon: "/icons/cover.svg",
    },
    {
      alias: "school",
      title: "School",
      slug: "/dashboard/school",
      icon: "/icons/people.svg",
    },
  ],
  [
    {
      alias: "faq",
      title: "FAQ",
      slug: "/dashboard/faq",
      icon: "/icons/alert.svg",
    },
    {
      alias: "tutorials",
      title: "Tutorials",
      slug: "/dashboard/tutorials",
      icon: "/icons/chat.svg",
    },
  ],
];

export default function DashboardNavigationDrawer({ alias }: PageProps) {
  return (
    <aside className="border flex bg-light-300 rounded-t-3xl shadow-xl text-sm w-full bottom-0 gap-4 overflow-hidden justify-between fixed md:(rounded-none border-none shadow-inner relative flex-col order-first max-w-32 py-4) ">
      <section className="border-b flex w-full justify-between md:(flex-col gap-8 pb-4) ">
        {Links[0].map((link, i) => (
          <NavCard
            key={i}
            icon={link.icon}
            slug={link.slug}
            title={link.title}
            status={alias == link.alias}
          />
        ))}
      </section>

      <section className="border-t w-full gap-4 hidden md:(flex-col pt-4 pb-32 flex) ">
        {Links[1].map((link, i) => (
          <NavCard
            key={i}
            icon={link.icon}
            slug={link.slug}
            title={link.title}
            status={alias == link.alias}
          />
        ))}
      </section>
    </aside>
  );
}

export function NavCard({ icon, title, slug, status }: LinkProps) {
  return (
    <Link href={slug}>
      <a
        className={`border-primary flex flex-col justify-center w-full bg-transparent items-center p-2 group text-center md:(border-t-0 p-0) text-sm capitalize ${
          !!status ? "border-t-4 md:border-r-4" : ""
        }`}
      >
        <img
          src={icon}
          className="mx-auto h-6 w-6 filter grayscale group-hover:(grayscale-0)"
          alt={title}
        />
        <div className="font-medium mx-auto text-center pt-1 group-hover:(text-primary)">
          {title}
        </div>
      </a>
    </Link>
  );
}

interface LinkProps {
  icon: string;
  slug: string;
  title: string;
  status: boolean;
}

interface PageProps {
  alias: string;
}
