import Image from "next/image";
import bg from "../../../../public/background/projects-background2.png";
import CertificateList from "@/components/certificates";
import { certificatesData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Ball = dynamic(
  () =>
    import("@/components/models/Ball").then((mod) => ({ default: mod.Ball })),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Licenses & Certifications",
};

export default function CertificatesPage() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's certificates page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <CertificateList certificates={certificatesData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Ball />
        </RenderModel>
      </div>
    </>
  );
}
