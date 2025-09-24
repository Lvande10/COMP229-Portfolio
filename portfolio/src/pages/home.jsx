import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main>
      {/* Introduction Section */}
      <section className="h-80 mb-10">
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
          Take a look around to see how I can help elevate your digital
          presence.
        </h2>
        <Link
          to="/about"
          className="font-semibold transition duration-400 ease-in-out border-b border-transparent hover:border-blue-700  px-4 py-2 text-gray-800 dark:text-white rounded-md bg-blue-200 dark:bg-gray-800 shadow-md"
        >
          About Me
        </Link>
      </section>

      {/* Mission Statement Section */}
      <section>
        <h2 className="text-4xl font-bold mb-1">Mission Statement</h2>
        <p>
          My mission is to deliver clean, efficient code and intuitive designs
          that help businesses achieve their digital goals all while{" "}
        </p>
      </section>
    </main>
  );
}
