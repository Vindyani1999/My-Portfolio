import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ArticleCard = motion.div;

const ArticleLayout = ({
  title,
  description,
  tags,
  publishDate,
  readTime,
  link,
  platform,
  image,
}) => {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <ArticleCard
      variants={item}
      className="text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden custom-bg border border-muted/20 hover:border-accent/50 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={192}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Platform badge */}
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-background/80 text-foreground text-xs rounded-md backdrop-blur-sm">
            {platform}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-foreground font-semibold text-lg mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Article Meta */}
        <div className="flex items-center gap-2 text-xs text-foreground/60 mb-4">
          <span>{formatDate(publishDate)}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent/10 text-foreground text-xs rounded-xl border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read Article Button */}
        <div className="mt-auto">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 bg-accent/40 hover:bg-accent/30 text-foreground text-sm rounded-md text-center transition-colors duration-200 border border-accent/30 flex items-center justify-center gap-2"
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Read Article
          </Link>
        </div>
      </div>
    </ArticleCard>
  );
};

export default ArticleLayout;
