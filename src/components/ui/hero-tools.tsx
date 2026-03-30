"use client";
import Figma from "@lobehub/icons/es/Figma";
import ClaudeCode from "@lobehub/icons/es/ClaudeCode";

const ZedIcon = ({ style }: { style?: React.CSSProperties }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M2.25 1.5a.75.75 0 0 0-.75.75v16.5H0V2.25A2.25 2.25 0 0 1 2.25 0h20.095c1.002 0 1.504 1.212.795 1.92L10.764 14.298h3.486V12.75h1.5v1.922a1.125 1.125 0 0 1-1.125 1.125H9.264l-2.578 2.578h11.689V9h1.5v9.375a1.5 1.5 0 0 1-1.5 1.5H5.185L2.562 22.5H21.75a.75.75 0 0 0 .75-.75V5.25H24v16.5A2.25 2.25 0 0 1 21.75 24H1.655C.653 24 .151 22.788.86 22.08L13.19 9.75H9.75v1.5h-1.5V9.375A1.125 1.125 0 0 1 9.375 8.25h5.314l2.625-2.625H5.625V15h-1.5V5.625a1.5 1.5 0 0 1 1.5-1.5h13.19L21.438 1.5z"/>
  </svg>
);

const RaycastIcon = ({ style }: { style?: React.CSSProperties }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252-1.252-3.312-3.32V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251-1.253Zm10.655 10.655-1.247 1.251 1.342 1.343 1.253-1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25-1.252z"/>
  </svg>
);

const GhosttyIcon = ({ style }: { style?: React.CSSProperties }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C6.7 0 2.4 4.3 2.4 9.6v11.146c0 1.772 1.45 3.267 3.222 3.254a3.18 3.18 0 0 0 1.955-.686 1.96 1.96 0 0 1 2.444 0 3.18 3.18 0 0 0 1.976.686c.75 0 1.436-.257 1.98-.686.715-.563 1.71-.587 2.419-.018.59.476 1.355.743 2.182.699 1.705-.094 3.022-1.537 3.022-3.244V9.601C21.6 4.3 17.302 0 12 0M6.069 6.562a1 1 0 0 1 .46.131l3.578 2.065v.002a.974.974 0 0 1 0 1.687L6.53 12.512a.975.975 0 0 1-.976-1.687L7.67 9.602 5.553 8.38a.975.975 0 0 1 .515-1.818m7.438 2.063h4.7a.975.975 0 1 1 0 1.95h-4.7a.975.975 0 0 1 0-1.95"/>
  </svg>
);

const tools = [
  { name: "Figma",       icon: <Figma.Color size={32} />                                              },
  { name: "Zed",         icon: <ZedIcon style={{ color: "#ffffff", width: 32, height: 32 }} />        },
  { name: "Raycast",     icon: <RaycastIcon style={{ color: "#FF6363", width: 32, height: 32 }} />    },
  { name: "Ghostty",     icon: <GhosttyIcon style={{ color: "#3551F3", width: 32, height: 32 }} />    },
  { name: "Claude Code", icon: <ClaudeCode.Color size={32} />                                         },
];

export function HeroTools() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div className="stat-label" style={{ marginBottom: "4px" }}>Daily tools</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "12px", width: "fit-content" }}>
        {tools.map(({ name, icon }) => (
          <div key={name} title={name} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
