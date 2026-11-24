import { useState, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  CircleCheck,
  Clock3,
  Command,
  FileClock,
  FolderSearch,
  Layers3,
  LayoutDashboard,
  Menu,
  Monitor,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router";
import type { SitePage } from "@/lib/routes";

const GITHUB_REPOSITORY = "https://github.com/hariharen9/WinBGM";
const GITHUB_RELEASES = `${GITHUB_REPOSITORY}/releases`;
const winbgmIcon = "/winbgm-icon.svg";
type PreviewView = "overview" | "applications" | "sources";

const pageLinks = [
  { id: "features", label: "Features", to: "/features" },
  { id: "safety", label: "Safety", to: "/safety" },
  { id: "download", label: "Download", to: "/download" },
] as const;

const previewApps = [
  { name: "Claude", publisher: "Anthropic", behavior: "Automatic service", ram: "90 MB" },
  { name: "WhatsApp", publisher: "WhatsApp Inc.", behavior: "Background process", ram: "150 MB" },
  { name: "Ollama", publisher: "Ollama Inc.", behavior: "At sign-in", ram: "240 MB" },
] as const;

const previewSources = [
  "Windows services",
  "Scheduled tasks",
  "Startup folders",
  "Explorer extensions",
  "Browser native hosts",
  "Kernel drivers",
  "Active Setup",
  "Winlogon hooks",
  "WMI subscriptions",
  "Store app permissions",
  "Registry launch entries",
  "Background processes",
] as const;

function SiteNavLinks({ active, closeMenu }: { active: SitePage; closeMenu: () => void }) {
  return (
    <>
      <Link
        to="/"
        className="nav-link"
        aria-current={active === "home" ? "page" : undefined}
        onClick={closeMenu}
      >
        Overview
      </Link>
      {pageLinks.map((item) => (
        <Link
          key={item.id}
          to={item.to}
          className="nav-link"
          aria-current={active === item.id ? "page" : undefined}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function MarketingShell({ active, children }: { active: SitePage; children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-root">
      <div className="announcement-strip">
        <CircleCheck aria-hidden="true" size={13} />
        <span>Open source · Windows 10 &amp; 11 · Built for deliberate changes</span>
      </div>
      <header className="site-header">
        <nav className="site-nav shell-wrap" aria-label="Main navigation">
          <Link to="/" className="brand-lockup" aria-label="WinBGM home">
            <img className="brand-icon" src={winbgmIcon} alt="" />
            <span>
              <span className="brand-name">WinBGM</span>
              <span className="brand-descriptor">Windows Background Manager</span>
            </span>
          </Link>

          <div className="desktop-nav">
            <SiteNavLinks active={active} closeMenu={() => undefined} />
          </div>

          <div className="nav-actions">
            <Button
              asChild
              variant="outline"
              className="site-button site-button-outline github-button"
            >
              <a href={GITHUB_REPOSITORY} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild className="site-button site-button-primary">
              <Link to="/download">
                Get WinBGM <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="menu-trigger"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>

          {menuOpen ? (
            <div className="mobile-nav-panel">
              <SiteNavLinks active={active} closeMenu={() => setMenuOpen(false)} />
              <Button asChild className="site-button site-button-primary">
                <Link to="/download" onClick={() => setMenuOpen(false)}>
                  Get WinBGM <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          ) : null}
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-main shell-wrap">
          <div>
            <Link to="/" className="brand-lockup" aria-label="WinBGM home">
              <img className="brand-icon" src={winbgmIcon} alt="" />
              <span>
                <span className="brand-name">WinBGM</span>
                <span className="brand-descriptor">Windows Background Manager</span>
              </span>
            </Link>
            <p className="footer-note">
              A clearer view of what your Windows PC runs in the background.
            </p>
          </div>
          <div className="footer-links" aria-label="Footer links">
            <Link to="/features">Features</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/download">Download</Link>
            <a href={GITHUB_REPOSITORY} target="_blank" rel="noopener noreferrer">
              Source
            </a>
            <a href={GITHUB_RELEASES} target="_blank" rel="noopener noreferrer">
              Releases
            </a>
          </div>
        </div>
        <div className="footer-bottom shell-wrap">
          <span>WinBGM · Windows 10 &amp; 11</span>
          <span>MIT license · Portable desktop app</span>
        </div>
      </footer>
    </div>
  );
}

export function ProductPreview() {
  const [view, setView] = useState<PreviewView>("overview");
  const [selectedApp, setSelectedApp] = useState("Claude");

  const views: { id: PreviewView; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "applications", label: "Applications" },
    { id: "sources", label: "Startup locations" },
  ];

  return (
    <figure className="product-preview" aria-label="WinBGM interface preview">
      <div className="preview-window">
        <div className="preview-titlebar">
          <div className="preview-app-brand">
            <img src={winbgmIcon} alt="" />
            <strong>WinBGM</strong>
          </div>
          <div className="preview-search" aria-hidden="true">
            <Search size={11} />
            <span>Search apps, services and tasks</span>
            <Command size={10} />
            <span>K</span>
          </div>
          <span className="preview-title-status">
            <CircleCheck aria-hidden="true" size={11} /> Safe mode
          </span>
        </div>

        <div className="preview-workspace">
          <aside className="preview-sidebar" aria-hidden="true">
            <span className="preview-sidebar-label">Manage</span>
            <span className="preview-sidebar-item is-active">
              <LayoutDashboard size={12} />
              Overview
            </span>
            <span className="preview-sidebar-item">
              <Layers3 size={12} />
              Applications
            </span>
            <span className="preview-sidebar-item">
              <SlidersHorizontal size={12} />
              Services
            </span>
            <span className="preview-sidebar-item">
              <Clock3 size={12} />
              Scheduled tasks
            </span>
            <span className="preview-sidebar-item">
              <FolderSearch size={12} />
              Startup locations
            </span>
            <span className="preview-sidebar-divider" />
            <span className="preview-sidebar-label">Other</span>
            <span className="preview-sidebar-item">
              <Activity size={12} />
              Snapshots &amp; diffs
            </span>
            <span className="preview-sidebar-item">
              <FileClock size={12} />
              Change history
            </span>
            <span className="preview-side-machine">
              <Monitor size={13} />
              Windows 11 sample
            </span>
          </aside>

          <div className="preview-main">
            <div className="preview-commandbar">
              <strong>
                {view === "overview"
                  ? "Overview"
                  : view === "applications"
                    ? "Applications"
                    : "Startup locations"}
              </strong>
              <span className="preview-sample-label">
                <CircleCheck size={10} /> Sample data
              </span>
            </div>

            <div className="preview-tabs" role="group" aria-label="Preview interface views">
              {views.map((item) => (
                <Button
                  key={item.id}
                  type="button"
                  variant="ghost"
                  className="preview-tab"
                  aria-pressed={view === item.id}
                  onClick={() => setView(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="preview-live-view" aria-live="polite">
              {view === "overview" ? (
                <>
                  <div className="preview-stat-grid">
                    <div className="preview-stat">
                      <span className="preview-stat-label">Scan surfaces</span>
                      <strong className="preview-stat-value">12</strong>
                      <span className="preview-stat-foot">Startup &amp; background sources</span>
                    </div>
                    <div className="preview-stat">
                      <span className="preview-stat-label">Background RAM</span>
                      <strong className="preview-stat-value">642 MB</strong>
                      <span className="preview-stat-foot">Illustrative Windows 11 sample</span>
                    </div>
                  </div>
                  <div className="preview-panel">
                    <div className="preview-panel-heading">
                      Applications in focus <span>Grouped inventory</span>
                    </div>
                    <div className="preview-table-head">
                      <span>Application</span>
                      <span>Activity</span>
                      <span>Launch behavior</span>
                    </div>
                    {previewApps.map((app) => (
                      <Button
                        key={app.name}
                        type="button"
                        variant="ghost"
                        className="preview-app-row"
                        aria-pressed={selectedApp === app.name}
                        onClick={() => setSelectedApp(app.name)}
                      >
                        <span className="preview-app-cell">
                          <span className="preview-app-glyph">{app.name.slice(0, 1)}</span>
                          <span className="preview-app-copy">
                            <span className="preview-app-name">{app.name}</span>
                            <span className="preview-app-publisher">{app.publisher}</span>
                          </span>
                        </span>
                        <span className="preview-app-state">Running · {app.ram}</span>
                        <span className="preview-app-mode">{app.behavior}</span>
                      </Button>
                    ))}
                  </div>
                </>
              ) : view === "applications" ? (
                <div className="preview-panel">
                  <div className="preview-panel-heading">
                    Application inventory <span>Sample PC</span>
                  </div>
                  <div className="preview-table-head">
                    <span>Application</span>
                    <span>Activity</span>
                    <span>Launch behavior</span>
                  </div>
                  {previewApps.map((app) => (
                    <Button
                      key={app.name}
                      type="button"
                      variant="ghost"
                      className="preview-app-row"
                      aria-pressed={selectedApp === app.name}
                      onClick={() => setSelectedApp(app.name)}
                    >
                      <span className="preview-app-cell">
                        <span className="preview-app-glyph">{app.name.slice(0, 1)}</span>
                        <span className="preview-app-copy">
                          <span className="preview-app-name">{app.name}</span>
                          <span className="preview-app-publisher">{app.publisher}</span>
                        </span>
                      </span>
                      <span className="preview-app-state">Running · {app.ram}</span>
                      <span className="preview-app-mode">{app.behavior}</span>
                    </Button>
                  ))}
                  <div className="preview-panel-heading">
                    Selected: {selectedApp} <span>Publisher · launch behavior · memory</span>
                  </div>
                </div>
              ) : (
                <div className="preview-panel">
                  <div className="preview-panel-heading">
                    Windows startup locations <span>12 surfaces</span>
                  </div>
                  <div className="preview-sources">
                    {previewSources.map((source) => (
                      <div className="preview-source-row" key={source}>
                        <CircleCheck size={11} /> {source}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="preview-caption">
        Interface recreation · sample values from the supplied project
      </figcaption>
    </figure>
  );
}

export function HeroEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-mark" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionLink({
  to,
  children,
}: {
  to: "/features" | "/safety" | "/download";
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children} <ChevronRight aria-hidden="true" size={15} />
    </Link>
  );
}

export { GITHUB_REPOSITORY, GITHUB_RELEASES };
