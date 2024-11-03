import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Sevak's Portfolio",
  description: "My personal Portfolio website",
};

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full pt-16">
        {/* <Hero /> */}
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
