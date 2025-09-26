import { useState } from "react";
import { Button } from "@heroui/react";

import AMiLogin from "../assets/projectImages/AMi/AMi_login.png";
import AMiAdminPanel from "../assets/projectImages/AMi/AMi_admin_panel.png";
import AMiImageGen from "../assets/projectImages/AMi/AMi_image_gen.png";
import AMiSessionChat from "../assets/projectImages/AMi/AMi_session_and_chat.png";
import RockyWestLanding from "../assets/projectImages/Rockywest/rockywest_landing.png";
import VanderlochLanding from "../assets/projectImages/Vanderloch/Vanderloch.png";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      name: "AMi - AI chatbot",
      roles: ["Full Stack Developer", "AI Developer", "System Engineer"],
      description:
        "Short for Avon Maitland intelligence - an AI chatbot with RAG built for AMDSB staff and students to answer questions about the school board. It uses Gemma3:24b and internal documents held in SharePoint documents to provide accurate and up-to-date information.",
      techStack: [
        "Next.JS",
        "TypeScript",
        "PostgreSQL (Supabase)",
        "TailwindCSS",
        "Ollama",
        "Langchain",
        "ComfyUI",
        "Enterprise Azure SSO",
      ],
      images: [AMiLogin, AMiAdminPanel, AMiImageGen, AMiSessionChat],
    },
    {
      name: "Rockywest Commercial Roofing",
      roles: ["Front End Developer"],
      description:
        "A website for a commercial roofing company that showcases their services, projects, and contact information. (Waiting on client approval to go live)",
      link: "https://rockyweststaging.vanderloch.com/",
      techStack: ["Next.JS", "TypeScript", "TailwindCSS"],
      images: [RockyWestLanding],
    },
    {
      name: "Vanderloch",
      roles: ["Front End Developer"],
      description:
        "A professional website to offer my skills and services for contractual or freelance work.",
      link: "https://vanderloch.com/",
      techStack: ["Next.JS", "TypeScript", "TailwindCSS", "Framer Motion"],
      images: [VanderlochLanding],
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects[0].images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + projects[0].images.length) % projects[0].images.length
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex flex-col mx-auto gap-6 mt-8 mb-8">
        {/* Project cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background/50 border border-foreground/10 rounded-xl p-6 w-full transition-transform relative"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            {/* Project images */}

            {/* Only AMi has multiple images with navigation */}
            {index === 0 ? (
              <div className="flex">
                {/* Left navigation button */}
                <Button
                  onPress={prevImage}
                  isIconOnly
                  className="self-center bg-transparent"
                >
                  <FaCaretLeft className="size-5" />
                </Button>
                <div className="max-w-full mx-auto flex">
                  {/* Project image */}
                  <img
                    src={project.images[currentImage]}
                    alt={`AMi chatbot screenshot`}
                    className="w-full h-auto mb-4 rounded-xl object-cover hover:scale-[1.05] transition-transform duration-400"
                  />
                </div>
                {/* Right navigation button */}
                <Button
                  onPress={nextImage}
                  isIconOnly
                  className="self-center bg-transparent"
                >
                  <FaCaretRight className="size-5" />
                </Button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4">
                <img
                  src={project.images[0]}
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto mb-4 rounded-xl object-cover hover:scale-[1.05] transition-transform duration-400"
                />
              </div>
            )}

            {/* Project description and tech stack */}
            <p className="text-foreground/80 mb-4">{project.description}</p>
            <h2 className="text-lg font-semibold mb-2">Role</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {project.roles.map((role, roleIndex) => (
                <span
                  key={roleIndex}
                  className="bg-success/20 text-foreground/80 px-2 py-1 rounded-full text-sm"
                >
                  {role}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-semibold mb-2">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-primary/20 text-foreground/80 px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project link button */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <Button
                className="bg-primary text-background"
                as="a"
                target="_blank"
                href={project.link}
                isDisabled={!project.link}
              >
                {project.link ? `View Project` : `AMDSB Access Only`}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
