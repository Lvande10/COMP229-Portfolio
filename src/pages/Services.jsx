import WebDevelopmentImage from "../assets/servicesImages/web_development.png";
import AutomationIntegrationImage from "../assets/servicesImages/automation_integration.png";
import MigrationDeploymentImage from "../assets/servicesImages/onPremToCloud.png";
import ConsultImage from "../assets/servicesImages/consult.png";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceList = [
    {
      name: "Web Application Development",
      image: WebDevelopmentImage,
      description: "Custom web applications built from the ground up to meet your specific business needs. I specialize in creating scalable, secure, and user-friendly applications using modern technologies like React and Node.js. From simple business tools to complex enterprise systems, I deliver solutions that streamline your operations and enhance user experience.",
    },
    {
      name: "Automation & Integration",
      image: AutomationIntegrationImage,
      description: "I can help automate your workflows and integrate various services to improve efficiency. Whether it's connecting APIs, setting up automated tasks, or creating custom integrations, I have the skills to make your systems work together seamlessly.",
    },
    {
      name: "Migration & Deployment",
      image: MigrationDeploymentImage,
      description: "I can assist with migrating your existing applications to new platforms or deploying new solutions. My expertise ensures a smooth transition with minimal downtime, allowing you to take advantage of the latest technologies without disrupting your business.",
    },
    {
      name: "Consultation & Support",
      image: ConsultImage,
      description: "I offer expert consultation and ongoing support to help you make the most of your technology investments. Whether you need strategic advice, troubleshooting assistance, or training for your team, I'm here to help."
    },
  ];

  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">Services</h1>

      <section className="mb-10">
        <p className="text-center text-lg text-foreground/90 mb-3">
          Interested in working together?
        </p>
        <Link
          to="/Contact"
          className="text-foreground bg-primary/50 hover:bg-primary/70 transition-colors duration-300 font-semibold border-1 border-primary rounded-2xl px-4 py-2"
        >
          Contact me
        </Link>
      </section>

      <section className="flex flex-col">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "self-start" : "self-end"
            } mb-6 flex flex-col max-w-full`}
          >
            <div className="flex justify-center my-4">
              <hr className="w-full border-gray-600" />
            </div>
            <h2 className="text-xl text-primary-600 mb-4">{service.name}</h2>
            <div className={`${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col gap-5`}>
                
              <div className="w-full flex-1 overflow-hidden max-h-80">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full lg:scale-160 lg:hover:scale-180 transition-transform duration-500"
                />
              </div>
              <p className="flex-1 my-auto text-left">{service.description}</p>
            </div>
            
          </div>
          
        ))}
      </section>
    </main>
  );
}
