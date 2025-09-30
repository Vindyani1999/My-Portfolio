import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = motion.div;

const ProjectLaypot = ({
  name,
  description,
  technologies,
  demoLink,
  liveLink,
  repoLink,
  image,
}) => {
  return (
    <ProjectCard
      variants={item}
      className="text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden custom-bg border border-muted/20 hover:border-accent/50 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={192}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" /> */}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-foreground font-semibold text-lg mb-2 line-clamp-1">
          {name}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Technology Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent/10 text-foreground text-xs rounded-xl border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-1 bg-accent/40 hover:bg-accent/30 text-foreground text-sm rounded-md text-center transition-colors duration-200 border border-accent/30 flex items-center justify-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Demo
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 bg-green-500/40 hover:bg-green-500/30 text-foreground text-sm rounded-md text-center transition-colors duration-200 border border-green-500/30 flex items-center justify-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Site
            </Link>
          )}
          {repoLink && (
            <Link
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 bg-muted/20 hover:bg-muted/30 text-foreground text-sm rounded-md text-center transition-colors duration-200 border border-muted/30 flex items-center justify-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </Link>
          )}
        </div>
      </div>
    </ProjectCard>
  );
};

export default ProjectLaypot;
