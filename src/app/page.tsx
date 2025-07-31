import { BlurFade } from '@/components/magicui/blur-fade';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/magicui/grid-pattern';

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen bg-neutral-900 overflow-hidden">
      <main className="relative text-center *:text-white flex flex-col items-center justify-center flex-1">
        <BlurFade>
          <p className="font-bold text-3xl text-white">👋 Fala chefe, de boa?</p>
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
                <a href="https://github.com/Mwrnk" target="_blank" rel="noopener noreferrer">
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
        </BlurFade>
      </main>
      <GridPattern
        width={50}
        height={50}
        x={5}
        y={520}
        className={cn('[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] ')}
      />
      <footer className="text-center pt-4 z-10 relative">
        <p className="font-mono text-sm text-gray-300">© 2025 Mateus Werneck 💻</p>
      </footer>
    </div>
  );
}
