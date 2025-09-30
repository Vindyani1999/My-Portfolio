import React from "react";
import ItemLayout from "./ItemLayout";

const Experience = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Work Experience
          </h2>

          <div className="w-full mt-4 space-y-6">
            {/* Software Engineer Trainee */}
            <div className="border-l-4 border-accent pl-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  Software Engineer Trainee
                </h3>
                <span className="text-sm text-gray-400">
                  Jun 2024 - Dec 2024
                </span>
              </div>
              <p className="text-accent font-medium">Irusri Group, Sweden</p>

              <div className="space-y-3 mt-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Frontend Developer
                    </h4>
                    <p className="text-sm text-foreground/80 mt-1">
                      Contributed to five real-time projects and one individual
                      project with experience in modern frontend technologies,
                      including React and TypeScript.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Project Coordinator
                    </h4>
                    <p className="text-sm text-foreground/80 mt-1">
                      Led project management tasks, coordinated developers, and
                      handled client communications by leveraging tools such as
                      GitHub Projects, Slack, and WordPress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Quality Assurance Tester
                    </h4>
                    <p className="text-sm text-foreground/80 mt-1">
                      Supported two projects by identifying, reporting, and
                      tracking bugs, ensuring higher product quality and
                      smoother releases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">UI Designer</h4>
                    <p className="text-sm text-foreground/80 mt-1">
                      Designed and refined for one external and two internal
                      projects using Figma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            6+ <sub className="font-semibold text-base">months</sub>
          </p>
          <p className="font-light text-xs sm:text-sm md:text-base">
            of professional experience
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">projects</sub>
          </p>
          <p className="font-light text-xs sm:text-sm md:text-base">
            completed successfully
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default Experience;
