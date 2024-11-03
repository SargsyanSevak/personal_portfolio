import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project preview | Sevak's Portfolio",
  description: "My personal Portfolio website",
};

const ProjectPreview = () => {
  return (
    <section className="relative bg-black-100 flex justify-center items-center flex-col     overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full h-screen flex justify-center items-center text-white">
        ProjectPreview
      </div>
    </section>
  );
};

export default ProjectPreview;
