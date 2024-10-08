import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "custom-bg col-span-full lg:col-span-8 row-span-3 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            About Me 
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          <div>
  <ul >
    <li>🌱 Works @Irusri Group as Software Engineer (Intern) </li>  
    <li>🎓 Currently pursuing BSc (Hons) degree in Computer Engineering.</li>
    <li>🏫 Studies at the Faculty of Engineering, University of Ruhuna, Galle, Sri Lanka.</li>
    <li>🎯 Learning Full Stack Web Developing, Mobile Application Development and AI </li>
    <li>🏡 Lives in Hambantota, Sri Lanka.</li>
    <li>🔍 Interest to learn new things</li>
  </ul>
</div></p>
          
        </ItemLayout>

        <ItemLayout
          className={" custom-bg col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl !p-0">
            10+ <sub className="font-semibold text-base">Individual & Group Projects</sub>
          </p>
        </ItemLayout>

                <ItemLayout
          className={" custom-bg col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl !p-0">
            4+ <sub className="font-semibold text-base">Collabarated Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"custom-bg col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl !p-0">
            3+{" "}
            <sub className="font-semibold text-base">Volenteering Events</sub>
          </p>
        </ItemLayout>



        <ItemLayout
          className={"custom-bg col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={'https://github-readme-stats.vercel.app/api/top-langs??username=Vindyani1999&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"custom-bg col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=Vindyani1999&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
        

        <ItemLayout className={"custom-bg col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=c,cpp,cs,js,py,java,html,css,bootstrap,react,nodejs,express,flask,androidstudio,flutter,firebase,figma,kotlin,mongodb,mysql,anaconda,aws,github,git,pytorch,sklearn,tailwind,tensorflow,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"custom-bg col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`http://github-readme-streak-stats.herokuapp.com?user=Vindyani1999&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"custom-bg col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/Vindyani1999/Plant-Disease-Detecting-Project"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=Vindyani1999&repo=Plant-Disease-Detecting-Project&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
