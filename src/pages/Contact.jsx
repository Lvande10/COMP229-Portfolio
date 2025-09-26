import { Button, Input, Textarea } from "@heroui/react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // create data object from form data
    const data = {
      fname: formData.get("fname"),
      lname: formData.get("lname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // show form data has been captured
    alert(JSON.stringify(data, null, 2));

    // redirect to home page
    window.location.href = "/";
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Contact Me</h1>
      {/* Social Links */}
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://linkedin.com/in/lucasvdm"
          target="_blank"
          className="text-primary hover:underline font-medium"
        >
          LinkedIn
        </a>

        <span className="text-foreground/60">|</span>
        <a
          href="mailto:lucas@vanderloch.com"
          className="text-primary hover:underline font-medium"
        >
          lucas@vanderloch.com
        </a>

        <span className="text-foreground/60">|</span>
        <a
          href="https://github.com/Lochis"
          target="_blank"
          className="text-primary hover:underline font-medium"
        >
          Github
        </a>
      </div>

      <h2 className="text-2xl font-semi-bold mt-6">
        Or fill out the form below
      </h2>

      {/* Form */}
      <form className="max-w-xl mx-auto mt-2 space-y-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <Input
            id="fname"
            name="fname"
            type="text"
            placeholder="First Name"
            className="w-full"
          />
          <Input
            id="lname"
            name="lname"
            type="text"
            placeholder="Last Name"
            className="w-full"
          />
        </div>
        <Input id="email" 
        name="email"
        type="email" 
        placeholder="Email" 
        className="w-full" />
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="w-full"
        />
        <Textarea id="message" name="message" placeholder="Your Message" className="w-full" />
        <Button type="submit" className="bg-primary/80 w-full text-foreground">
          Send Message
        </Button>
      </form>
    </>
  );
}
