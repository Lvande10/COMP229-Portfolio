import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useState } from "react";
import headshot from "../assets/headshot.jpg";
import resumePDF from "../assets/Lucas_Vandermaarel_-_Systems_Engineer.pdf";

export default function About() {
  const [isOpen, onOpenChange] = useState(false);

  // Check if device is mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const handleDownload = () => {
    // Open the PDF in a new tab
    window.open(resumePDF, "_blank");
  }

  return (
    <>
      <section>
        <img
          src={headshot}
          alt="Headshot of Lucas Vandermaarel"
          className="justify-self-center w-56 rounded-full border-2 border-gray-300"
        />
      </section>
      <p className="text-2xl">Lucas Vandermaarel</p>
      <div className="space-y-6">
        <p className="text-xl text-center font-medium text-primary mb-8">
          Full-stack Developer | DevOps Engineer
        </p>
        <Button
          variant="solid"
          color="primary"
          size="lg"
          onPress={isMobile ? handleDownload : onOpenChange}
        >
          Download Resume
        </Button>

        <p className="leading-relaxed text-lg">
          As a dynamic Systems Engineer with over five years of experience, I
          specialize in system administration, automation scripting,
          cybersecurity, and full-stack development.
          <br />I consistently deliver solutions that enhance operational
          efficiency and reliability.
        </p>

        <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
          <h2 className="text-xl font-semibold mb-4">Career Highlights</h2>
          <ul className="space-y-2">
            <li className="flex">
              <span className="text-primary mr-2">•</span>
              Architected automation flows for education systems
            </li>
            <li className="flex">
              <span className="text-primary mr-2">•</span>
              Integrated and supported 19+ mission-critical services for
              thousands of users
            </li>
            <li className="flex">
              <span className="text-primary mr-2">•</span>
              Developed robust custom applications ensuring seamless
              collaboration and security
            </li>
          </ul>
        </div>

        <p className="leading-relaxed text-lg">
          I excel in <strong>cloud configuration</strong>,{" "}
          <strong>custom scripting</strong>, and{" "}
          <strong>system administration</strong>—skills that enable me to deploy
          cutting-edge technologies while maintaining high standards for
          usability and safety.
        </p>

        <p className="leading-relaxed text-lg">
          With a commitment to continuous improvement, I strive to cultivate
          environments where technology empowers users and organizations to
          achieve more.
        </p>
      </div>

      {/* PDF Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        backdrop="blur"
        hidden={isMobile} // Hide modal on mobile devices
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Resume - Lucas Vandermaarel
              </ModalHeader>
              <ModalBody className="p-0">
                <div className="w-full h-[80vh]">
                  <iframe
                    src={resumePDF}
                    width="100%"
                    height="100%"
                    title="Resume PDF"
                    className="border-0"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
