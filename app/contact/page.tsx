import { ContactMe } from "@/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contac | Sevak's Portfolio",
  description: "My personal Portfolio website",
};

const Contact = () => {
  return (
    <section className="relative bg-black-100 flex justify-center items-center flex-col     overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl md:w-[500px] w-full min-h-screen  text-white pt-16">
        <ContactMe />
      </div>
    </section>
  );
};

export default Contact;
