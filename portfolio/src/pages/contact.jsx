export default function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/lucasvdm"
              target="_blank"
              className="text-primary hover:underline font-medium"
            >
              LinkedIn
            </a>

            <span className="text-foreground/60">|</span>
            <a
              href="https://github.com/Lochis"
              target="_blank"
              className="text-primary hover:underline font-medium"
            >
              Github
            </a>

            <span className="text-foreground/60">|</span>
            <a
              href="mailto:lukevdm64@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              lukevdm64@gmail.com
            </a>
          </div>
    </>
  );
}
