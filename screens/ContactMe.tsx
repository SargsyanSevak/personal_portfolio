"use client";
import MagicButton from "@/components/MagicButton";
import { Button } from "@/components/ui/MovingBorders";
import useSendMessage from "@/hooks/useSendMessage";
import { Controller } from "react-hook-form";
import { FaLocationArrow } from "react-icons/fa6";

const ContactMe = () => {
  const { control, errors, handleSubmit, reset, handleFormSubmit } =
    useSendMessage();

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Contact <span className="text-purple">Me</span>
      </h1>

      <div className="mt-12 gap-10 flex flex-col w-[400px]">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="0.6rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `0.6rem`,
          }}
          className="flex-1 w-40 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex-col justify-start items-start"
        >
          <Controller
            control={control}
            render={({ field }) => (
              <input
                placeholder="Your full name"
                type="text"
                className="w-full border-none bg-transparent text-white p-4 outline-none focus:outline-none active:outline-none"
                {...field}
              />
            )}
            name="full_name"
          />
          <p className="text-red-500 pl-4">{errors.full_name?.message}</p>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="0.6rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `0.6rem`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Controller
            control={control}
            render={({ field }) => (
              <input
                placeholder="Your company name"
                type="text"
                className="w-full border-none bg-transparent text-white p-4 outline-none focus:outline-none active:outline-none"
                {...field}
              />
            )}
            name="company"
          />
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="0.6rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `0.6rem`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Controller
            control={control}
            render={({ field }) => (
              <input
                placeholder="Your email address"
                type="email"
                className="w-full border-none bg-transparent text-white p-4 outline-none focus:outline-none active:outline-none"
                {...field}
              />
            )}
            name="email"
          />
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="0.6rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `0.6rem`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Controller
            control={control}
            render={({ field }) => (
              <textarea
                placeholder="Your message"
                className="w-full border-none bg-transparent text-white p-4 outline-none focus:outline-none active:outline-none"
                {...field}
              />
            )}
            name="message"
          />
        </Button>

        <div className="w-full flex justify-center items-center -mt-4">
          <MagicButton
            title="Send Message"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={handleSubmit(handleFormSubmit)}
            otherClasses="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
