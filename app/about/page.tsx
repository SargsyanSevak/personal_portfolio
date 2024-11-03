import { AboutMe } from "@/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sevak's Portfolio",
  description: "My personal Portfolio website",
};

const Home = () => {
  return (
    <section className="relative bg-black-100 flex justify-center items-center flex-col     overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full flex justify-center items-center text-white pt-16">
        <AboutMe />
      </div>
    </section>
  );
};

export default Home;
