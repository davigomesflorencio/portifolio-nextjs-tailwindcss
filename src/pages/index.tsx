import PagesMetaHead from "@/components/PagesMetaHead";
import Button from "@/components/reusable/Button";
import AppBanner from "@/components/shared/AppBanner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />

      <AppBanner />

      {/* <ProjectsGrid /> */}

      <div className="mt-10 sm:mt-15 flex justify-center">
        <div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
          <Link href="/projects" aria-label="More Projects" passHref>
            <Button title="Mais projetos" />
          </Link>
        </div>
      </div>
    </div>
  );
}
