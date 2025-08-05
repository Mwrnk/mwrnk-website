import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { ProfileCard } from "@/components/profile-card";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen bg-neutral-900 overflow-hidden">
      <main className="relative text-center *:text-white flex flex-col items-center justify-center flex-1">
        <BlurFade>
          <p className="font-bold text-5xl text-white">
            👋 Hello, I&lsquo;m Mateus Werneck!
          </p>
          <p className="font-bold text-xl text-gray-300 mt-2 ">
            Currently open for free-lance projects and collaborations.
          </p>
        </BlurFade>
        <section className="mt-4 text-2xl text-white">
          <pre>
            {String.raw`
/\___/\
/       \
| o w o |
\_______/
/w w\
\w w/
S
`}
          </pre>
        </section>

        <BlurFade className="mt-8" direction="up">
          <div className="mt-8 *:text-white font-black">
            <ul className="flex flex-row items-center justify-center space-x-8">
              <li className="text-lg hover:transform hover:scale-105 transition-transform duration-300">
                <a
                  href="https://github.com/Mwrnk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="text-lg hover:transform hover:scale-105 transition-transform duration-300">
                <a
                  href="https://www.linkedin.com/in/mateuswerneck/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <a
            href="mailto:mwrnkdev@gmail.com"
            aria-label="Enviar e-mail para mwrnkdev@gmail.com"
            className="group block max-w-md m-4 px-4 py-3 text-lg md:text-xl text-gray-300 border border-gray-700 rounded-2xl bg-neutral-800 hover:bg-neutral-700 shadow-lg transition-colors duration-200"
          >
            <span className="flex items-center justify-between">
              <span className="truncate">mwrnkdev@gmail.com</span>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </a>
        </BlurFade>
      </main>
      <GridPattern
        width={50}
        height={50}
        x={5}
        y={520}
        className={cn(
          "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] ",
        )}
      />
      <footer className="text-center pb-4 z-10 relative">
        <ProfileCard />
      </footer>
    </div>
  );
}
