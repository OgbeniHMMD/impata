import Link from "next/link";
import DashboardCourseCard from "../../components/Dashboard/DashboardCourseCard";
import DashboardLayout from "../../layouts/DashboardLayout";

const courses = [
  {
    lessonlogcount: 0,
    progress: 0,
    progressSet: false,
    id: 5,
    courseTitle: "Web. Development",
    imageUrl:
      "https://impatamediastorage.s3-us-west-2.amazonaws.com/Media/3/5/logo",
    courseCode: "WEB 102",
    description:
      '<p>Hypertext Markup Language (HTML) is the standard <a href="https://en.wikipedia.org/wiki/Markup_language">markup language</a> for creating <a href="https://en.wikipedia.org/wiki/Web_page">web pages</a> and <a href="https://en.wikipedia.org/wiki/Web_application">web applications</a>. With <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">Cascading Style Sheets</a> (CSS) and <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a> it forms a triad of cornerstone technologies for the <a href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a>.<a href="https://en.wikipedia.org/wiki/HTML#cite_note-1">[1]</a> <a href="https://en.wikipedia.org/wiki/Web_browser">Web browsers</a> receive HTML documents from a <a href="https://en.wikipedia.org/wiki/Webserver">webserver</a> or from local storage and render them into multimedia web pages. HTML describes the structure of a web page <a href="https://en.wikipedia.org/wiki/Semantic">semantically</a> and originally included cues for the appearance of the document.</p>',
    lessonCount: 3,
    price: 5,
    accessDays: 0,
  },
  {
    lessonlogcount: 0,
    progress: 0,
    progressSet: false,
    id: 10,
    courseTitle: "Nutrition",
    imageUrl:
      "https://impatamediastorage.s3-us-west-2.amazonaws.com/Media/5/10/logo",
    courseCode: "",
    description:
      "<p>How healthy is your diet? Are you confused about what to eat? Do you want to help others improve their lifestyle? Our Nutrition programme is a 4-week guide to help you change or improve your lifestyle. You will learn how to create balanced meals, set goals, adapt eating to achieve your objectives and finally understand how to master your health. Ideal for anyone looking to lose weight, boost energy levels or for those who wish to add nutrition to their list of professional skills.</p>",
    lessonCount: 0,
    price: 0,
    accessDays: 0,
  },
  {
    lessonlogcount: 0,
    progress: 0,
    progressSet: false,
    id: 11,
    courseTitle: "Cosmetics",
    imageUrl:
      "https://impatamediastorage.s3-us-west-2.amazonaws.com/Media/5/11/logo",
    courseCode: "",
    description:
      "<p>Learn to enhance or alter the appearance or fragrance of the body using&nbsp;lipstick, mascara, eye shadow, foundation, rouge, skin cleansers and skin lotions, shampoo, hairstyling products (gel, hair spray,cream, etc.), perfume and cologne.&nbsp;</p>",
    lessonCount: 2,
    price: 0,
    accessDays: 0,
  },
  {
    lessonlogcount: 0,
    progress: 0,
    progressSet: false,
    id: 6292,
    courseTitle: "Microsoft Office for Beginners",
    imageUrl:
      "https://impatamediastorage.s3-us-west-2.amazonaws.com/Media/3/6292/logo",
    courseCode: "MSO 101",
    description: "<p><br></p>",
    lessonCount: 0,
    price: 0,
    accessDays: 0,
  },
  {
    lessonlogcount: 2,
    progress: 67,
    progressSet: true,
    id: 6293,
    courseTitle: "Advanced Excel",
    imageUrl:
      "https://impatamediastorage.s3-us-west-2.amazonaws.com/Media/3/6293/logo",
    courseCode: "XLS 201",
    description: "<p><br></p>",
    lessonCount: 3,
    price: 0,
    accessDays: 0,
  },
];

export default function DashboardHome() {
  return (
    <DashboardLayout title="Dashboard" alias="dashboard">
      <section className="grid py-4 gap-4 grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, i) => (
          <DashboardCourseCard
            key={i}
            id={course.id}
            progress={course.progress}
            imageUrl={course.imageUrl}
            courseCode={course.courseCode}
            courseTitle={course.courseTitle}
          />
        ))}
      </section>
    </DashboardLayout>
  );
}
