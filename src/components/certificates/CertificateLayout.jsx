import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const CertificateCard = motion.div;

const CertificateLayout = ({
  title,
  issuer,
  platform,
  issueDate,
  expiryDate,
  credentialId,
  skills,
  description,
  verificationLink,
  image,
}) => {
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <CertificateCard
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

        {/* Issuer and Platform */}
        <div className="mb-3">
          <p className="text-accent font-medium">{issuer}</p>
          <p className="text-foreground/60 text-sm">{platform}</p>
        </div>

        {/* Description */}
        <p className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Certificate Meta */}
        <div className="flex items-center gap-2 text-xs text-foreground/60 mb-4">
          <span>Issued: {formatDate(issueDate)}</span>
          {expiryDate && (
            <>
              <span>•</span>
              <span>Expires: {formatDate(expiryDate)}</span>
            </>
          )}
        </div>

        {/* Credential ID */}
        {/* <div className="text-xs text-foreground/60 mb-4">
          <span>ID: {credentialId}</span>
        </div> */}

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent/10 text-foreground text-xs rounded-xl border border-accent/20"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="px-2 py-1 bg-muted/20 text-foreground/60 text-xs rounded-xl border border-muted/30">
              +{skills.length - 3} more
            </span>
          )}
        </div>

        {/* Verify Button */}
        <div className="mt-auto">
          {verificationLink ? (
            <Link
              href={verificationLink}
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Verify Certificate
            </Link>
          ) : (
            <div className="w-full px-4 py-2 bg-muted/20 text-foreground/60 text-sm rounded-md text-center border border-muted/30">
              No verification available
            </div>
          )}
        </div>
      </div>
    </CertificateCard>
  );
};

export default CertificateLayout;
