'use client';

import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react';
import {
  SiReact, SiTypescript, SiSwift, SiNextdotjs,
  SiZedindustries, SiFigma, SiApple,
} from 'react-icons/si';
import { ClaudeCode } from '@lobehub/icons';

const TECH_ICONS: Record<string, ReactNode> = {
  'Next.js 16':     <SiNextdotjs size={12} />,
  'React 19':       <SiReact size={12} />,
  'React Native':   <SiReact size={12} />,
  'TypeScript':     <SiTypescript size={12} />,
  'Swift':          <SiSwift size={12} />,
  'SwiftUI':        <SiApple size={12} />,
  'iOS':            <SiApple size={12} />,
  'Figma':          <SiFigma size={12} />,
  'AI':             <ClaudeCode size={12} />,
};

type ProjectLink = { label: string; url: string };

type Project = {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  role: string;
  year: string;
  tags: string[];
  stack: string[];
  links: ProjectLink[];
};

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Discentia',
    shortDesc: 'Local-first study app that closes the learning loop: upload content, chat with AI, generate flashcards, review with spaced repetition.',
    fullDesc: [
      'Local-first study app that closes the learning loop: upload content, chat with AI, generate flashcards, review with spaced repetition. All processing runs in the browser — no backend, no data leaving your device.',
      'Built for people who study sensitive material (law, medicine, competitive exams) and cannot afford to upload it to a third-party server. BYO API keys — connect OpenAI, OpenRouter, Ollama, or GitHub Copilot. Keys are encrypted with AES-GCM and never leave your browser.',
    ],
    role: 'Creator',
    year: '2025',
    tags: ['Next.js 16', 'React 19', 'IndexedDB', 'AI'],
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Zustand', 'Dexie v4 / IndexedDB', 'Tiptap v3', 'SM-2 algorithm', 'AES-GCM encryption'],
    links: [{ label: 'GitHub ↗', url: 'https://github.com/Mwrnk/discentia-app' }],
  },
  {
    number: '02',
    title: 'Mindspheres',
    shortDesc: 'iOS app for daily reflection and mindfulness. Built in Swift as a solo project.',
    fullDesc: [
      'iOS app for daily reflection and mindfulness. Built in Swift as a solo project, focused on intentional journaling and personal growth.',
      'Designed and developed end-to-end — from concept and UX to final implementation.',
    ],
    role: 'Creator',
    year: '2026',
    tags: ['Swift', 'iOS', 'SwiftUI'],
    stack: ['Swift', 'SwiftUI', 'iOS'],
    links: [{ label: 'GitHub ↗', url: 'https://github.com/Mwrnk/mindspheres' }],
  },
  {
    number: '03',
    title: 'Vale Vida Clube',
    shortDesc: 'Health and benefits club app published on the App Store and Google Play.',
    fullDesc: [
      'Health and benefits club app published on the App Store and Google Play.',
      'Led the entire mobile development pipeline — from architecture and implementation to store submission and release management.',
    ],
    role: 'Mobile Developer',
    year: '2024',
    tags: ['React Native', 'TypeScript'],
    stack: ['React Native', 'TypeScript'],
    links: [],
  },
  {
    number: '04',
    title: 'Neet',
    shortDesc: "App published on the App Store and Google Play. Contributed as one of the developers.",
    fullDesc: [
      "App published on the App Store and Google Play. Contributed as one of the core developers.",
      "neet.website is the product's public landing page and waitlist.",
    ],
    role: 'Developer',
    year: '2025',
    tags: ['TypeScript', 'App Store', 'Play Store'],
    stack: ['TypeScript'],
    links: [{ label: 'Website ↗', url: 'https://neet.website' }],
  },
];

type Rect = { top: number; left: number; width: number; height: number };

type MorphState = {
  idx: number;
  startRect: Rect;
  fullRect: Rect;
  phase: 'expanding' | 'open' | 'closing';
};

export function ProjectMorph() {
  const [morph, setMorph] = useState<MorphState | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const open = useCallback((idx: number) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    const r = el.getBoundingClientRect();
    setMorph({
      idx,
      startRect: { top: r.top, left: r.left, width: r.width, height: r.height },
      fullRect: { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight },
      phase: 'expanding',
    });
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        setMorph(s => s ? { ...s, phase: 'open' } : s)
      )
    );
  }, []);

  const close = useCallback(() => {
    setMorph(s => {
      if (!s) return s;
      const el = cardRefs.current[s.idx];
      const r = el?.getBoundingClientRect();
      const startRect = r
        ? { top: r.top, left: r.left, width: r.width, height: r.height }
        : s.startRect;
      return { ...s, startRect, phase: 'closing' };
    });
    setTimeout(() => setMorph(null), 700);
  }, []);

  const isActive = morph !== null;
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isActive]);

  useEffect(() => {
    if (morph?.phase !== 'open') return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [morph?.phase, close]);

  const isOpen = morph?.phase === 'open';
  const project = morph ? PROJECTS[morph.idx] : null;
  const targetRect = isOpen ? morph!.fullRect : morph?.startRect;

  return (
    <>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div
            key={p.number}
            ref={el => { cardRefs.current[i] = el; }}
            className={`project-item reveal reveal-d${(i % 4) + 1}`}
            onClick={() => open(i)}
          >
            <div className="project-number">{p.number}</div>
            <div className="project-title">
              {p.title}
              <span className="project-arrow">↗</span>
            </div>
            <div className="project-desc">{p.shortDesc}</div>
            <div className="project-meta">
              <span className="project-role">{p.role}</span>
              {p.tags.slice(0, 3).map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {morph && project && targetRect && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          style={{
            position: 'fixed',
            zIndex: 1000,
            background: '#050505',
            overflowY: isOpen ? 'auto' : 'hidden',
            overflowX: 'hidden',
            top: targetRect.top,
            left: targetRect.left,
            width: targetRect.width,
            height: targetRect.height,
            transition: [
              'top 0.65s cubic-bezier(0.25, 0, 0, 1)',
              'left 0.65s cubic-bezier(0.25, 0, 0, 1)',
              'width 0.65s cubic-bezier(0.25, 0, 0, 1)',
              'height 0.65s cubic-bezier(0.25, 0, 0, 1)',
            ].join(', '),
          }}
        >
          <button
            onClick={close}
            className={`morph-close${isOpen ? ' morph-close-show' : ''}`}
            aria-label="Close"
          >
            ✕
          </button>

          <div className={`morph-content${isOpen ? ' morph-content-show' : ''}`}>
            <div className="morph-top">
              <span className="morph-num">{project.number}</span>
              <span className="morph-year-label">{project.year}</span>
            </div>

            <h2 className="morph-h2">{project.title}</h2>

            <div className="morph-role-row">
              <span className="morph-role-tag">{project.role}</span>
              <span className="morph-sep">·</span>
              {project.tags.map(t => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>

            <div className="morph-text-block">
              {project.fullDesc.map((para, i) => (
                <p key={i} className="morph-para">{para}</p>
              ))}
            </div>

            {project.stack.length > 0 && (
              <div className="morph-stack-section">
                <div className="morph-section-label">Stack</div>
                <div className="morph-stack-pills">
                  {project.stack.map(s => (
                    <span key={s} className="morph-stack-pill">
                      {TECH_ICONS[s] && (
                        <span className="morph-pill-icon">{TECH_ICONS[s]}</span>
                      )}
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.links.length > 0 && (
              <div className="morph-links-section">
                {project.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="morph-link"
                    onClick={e => e.stopPropagation()}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
