import { DotGrid } from '@/components/dot-grid';
import { ProjectMorph } from '@/components/project-morph';
import { GearBento } from '@/components/gear-bento';

export default function Home() {
  return (
    <>
      <DotGrid />
      <div className="content">
        <nav>
          <div className="nav-name">Mateus Werneck</div>
          <div className="nav-links">
            <a href="#work" className="active">Work</a>
            <a href="#gear">Gear</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero">
          <h1 className="hero-title reveal reveal-d1">Dev<br /><em>&amp; Creator</em></h1>
          <p className="hero-subtitle reveal reveal-d2">
            React &amp; React Native developer building responsive interfaces and mobile experiences. Open for freelance and junior opportunities.
          </p>
        </section>

        <section className="section" id="work">
          <div className="section-label reveal reveal-d1">Selected Projects</div>
          <ProjectMorph />
        </section>

        <section className="section" id="gear">
          <div className="section-label reveal reveal-d1">Gear &amp; Tools</div>
          <GearBento />
        </section>

        <section className="about-section" id="about">
          <div className="about-left">
            <h2 className="about-heading">
              From design<br />to shipped<br /><em>product</em>
            </h2>
          </div>
          <div className="about-right">
            <p>
              React and React Native developer based in Brazil 🇧🇷, with experience in TypeScript, Next.js, REST APIs, and the full mobile development lifecycle — from implementation to App Store publication.
            </p>
            <p>
              Comfortable translating Figma designs into pixel-perfect code, building reusable component systems, and working closely with UI/UX concepts. Strong foundation in React Hooks, state management, and component-based architecture.
            </p>
            <div className="status-bar">
              <div className="status-dot"></div>
              <span className="status-text">Open to Junior React / React Native roles — 2026</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2 className="contact-heading">
            Let&apos;s make<br /><em>something real</em>
          </h2>
          <a href="mailto:mwrnkdev@gmail.com" className="contact-email">
            mwrnkdev@gmail.com
          </a>
        </section>

        <footer>
          <div className="footer-left">© 2026 Mateus Werneck</div>
          <div className="footer-right">
            <a href="https://github.com/Mwrnk" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mateuswerneck/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </>
  );
}
