'use client';

import {
  SiApple, SiZedindustries, SiRaycast,
  SiIterm2, SiGooglechrome, SiFigma,
} from 'react-icons/si';
import { ClaudeCode, Codex } from '@lobehub/icons';

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="gear-icon">{children}</span>;
}

export function GearBento() {
  return (
    <div className="gear-bento">

      <div className="gear-card gear-span-3 reveal reveal-d1">
        <div className="gear-card-top">
          <span className="gear-label">Machine</span>
          <Icon><SiApple size={16} /></Icon>
        </div>
        <h3 className="gear-name gear-xl">MacBook Air <span className="gear-chip">M2</span></h3>
        <p className="gear-sub">Silent. Always with me.</p>
      </div>

      <div className="gear-card gear-highlight reveal reveal-d2">
        <div className="gear-card-top">
          <span className="gear-label">Launcher <em>★</em></span>
          <Icon><SiRaycast size={16} /></Icon>
        </div>
        <h3 className="gear-name gear-md">Raycast</h3>
        <p className="gear-sub">Favorite app.</p>
      </div>

      <div className="gear-card gear-span-2 gear-ai reveal reveal-d1">
        <div className="gear-card-top">
          <span className="gear-label">AI Agents</span>
          <span className="gear-icon gear-icon-pair">
            <ClaudeCode size={15} />
            <Codex size={15} />
          </span>
        </div>
        <h3 className="gear-name gear-lg">Claude Code <span className="gear-dot">·</span> Codex</h3>
        <p className="gear-sub">AI-native development workflow.</p>
      </div>

      <div className="gear-card reveal reveal-d2">
        <div className="gear-card-top">
          <span className="gear-label">Editor</span>
          <Icon><SiZedindustries size={16} /></Icon>
        </div>
        <h3 className="gear-name gear-md">Zed</h3>
      </div>

      <div className="gear-card reveal reveal-d3">
        <div className="gear-card-top">
          <span className="gear-label">Terminal</span>
          <Icon><SiIterm2 size={16} /></Icon>
        </div>
        <h3 className="gear-name gear-md">iTerm</h3>
      </div>

      <div className="gear-card reveal reveal-d1">
        <div className="gear-card-top">
          <span className="gear-label">Font</span>
        </div>
        <h3 className="gear-name gear-sm">Geist Mono</h3>
      </div>

      <div className="gear-card reveal reveal-d2">
        <div className="gear-card-top">
          <span className="gear-label">Theme</span>
        </div>
        <h3 className="gear-name gear-sm">Ayu</h3>
        <p className="gear-sub">Dark · Light</p>
      </div>

      <div className="gear-card reveal reveal-d3">
        <div className="gear-card-top">
          <span className="gear-label">Design</span>
          <Icon><SiFigma size={16} /></Icon>
        </div>
        <h3 className="gear-name gear-sm">Figma</h3>
      </div>

      <div className="gear-card reveal reveal-d4">
        <div className="gear-card-top">
          <span className="gear-label">Browser</span>
          <Icon><SiGooglechrome size={16} /></Icon>
        </div>
        <h3 className="gear-name gear-sm">Chrome</h3>
        <p className="gear-sub">Safari</p>
      </div>

    </div>
  );
}
