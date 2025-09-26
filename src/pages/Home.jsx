import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="justify-center flex align-middle flex-col min-h-[65vh]">
      {/* Introduction Section */}
      <section className="">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-2">
          <span className="">Hi there!</span>
          <span className="font-bold">
            {" "}
            I'm<span className="text-blue-600 dark:text-blue-400"> Lucas</span>
          </span>
        </h1>
        <h2 className="text-2xl mb-8">
          A{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Full-Stack Developer
          </span>{" "}
          and{" "}
          <span className="text-yellow-600 dark:text-yellow-400">
            DevOps Engineer
          </span>{" "}
          who transforms ideas into powerful web applications and workflows.{" "}
          <br />
          <br/>
          My mission is to deliver <span className="font-semibold">clean</span>, <span className="font-semibold">efficient</span> code and intuitive designs
          that help businesses achieve their digital goals all while maintaining a strong focus on <span className="font-semibold">security</span> and <span className="font-semibold">performance</span>.
        </h2>
        <Link
          to="/about"
          className="
          mx-auto
          text-xl
          px-4 py-2
          font-semibold 
          transition duration-400 ease-in-out 
          border-b border-transparent hover:border-blue-700 
          text-gray-800 dark:text-white 
          rounded-xl 
          bg-blue-200 dark:bg-gray-800 shadow-md
          "
        >
          About Me
        </Link>
      </section>
    </main>
  );
}
