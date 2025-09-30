import Image from "next/image";
import bg from "../../../../public/background/projects-background2.png";
import ArticleList from "@/components/articles";
import { articlesData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export const metadata = {
  title: "Articles & Blogs",
};

export default function ArticlesPage() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's articles page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ArticleList articles={articlesData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </>
  );
}
