import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};


const ProjectLink = motion(Link);

const ProjectLayput = ({ name, description, date, demoLink, image }) => {
  return (
    <ProjectLink
    variants={item} href={demoLink} target="_blank" className="text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg">
      <div className="flex items-center justify-center space-x-2">
        <img src={image} alt={name} className=" w-12 h-12 lg:w-20 lg:h-20 rounded-md opacity-80 mx-2" /> {/* Adjust the width and height as needed */}
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent  border-muted" />
      <p className="text-muted hidden sm:inline-block xs:text-foreground">{new Date(date).toDateString()}</p>
    </ProjectLink>
  );
};

export default ProjectLayput;
