/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.acs.edu.au",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "media1.popsugar-assets.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "moneyfactscompare.co.uk",
      },
      {
        protocol: "https",
        hostname: "ca.brodandtaylor.com",
      },
      {
        protocol: "https",
        hostname: "www.ionos.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "thedatascientist.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
