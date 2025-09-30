import Image from "next/image";
import bg from "../../../../public/background/experience-background.png";
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/Hat";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/experience"), {
  ssr: false,
});

export const metadata = {
  title: "Experience",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's experience page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Experience
          </h1>
          <p className="font-light text-foreground text-ls">
            My Professional Journey
          </p>
        </div>
      </div>

      <Experience />
    </>
  );
}
