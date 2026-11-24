import { GITHUB_RELEASES } from "@/components/winbgm-site";
import { Link } from "@/lib/router";

const mockApps = [
  {
    name: "Discord",
    publisher: "Discord Inc.",
    components: "3 components",
    status: "Running",
    running: true,
    launch: "At sign-in",
    logoClass: "legacy-app-discord",
  },
  {
    name: "Steam",
    publisher: "Valve Corporation",
    components: "2 components",
    status: "Stopped",
    running: false,
    launch: "Manual",
    logoClass: "legacy-app-steam",
  },
  {
    name: "Microsoft Teams",
    publisher: "Microsoft Corporation",
    components: "2 components",
    status: "Running",
    running: true,
    launch: "At sign-in",
    logoClass: "legacy-app-teams",
  },
  {
    name: "Spotify",
    publisher: "Spotify AB",
    components: "1 component",
    status: "Stopped",
    running: false,
    launch: "Disabled",
    logoClass: "legacy-app-spotify",
  },
] as const;

const mockNav = [
  { icon: "▦", label: "Overview", active: true },
  { icon: "◫", label: "Applications", count: "24" },
  { icon: "⚙", label: "Services" },
  { icon: "◷", label: "Scheduled tasks" },
  { icon: "⌖", label: "Startup locations" },
] as const;

const mockOtherNav = [
  { icon: "▣", label: "Snapshots & Diffs" },
  { icon: "↶", label: "Change history" },
  { icon: "☷", label: "Settings" },
] as const;

export function LegacyHero() {
  return (
    <section className="legacy-hero shell-wrap">
      <div className="legacy-hero-copy">
        <div className="legacy-eyebrow">
          <span className="legacy-eyebrow-dot" />
          A clearer view of Windows background activity
          <span className="legacy-eyebrow-line" />
        </div>

        <h1 className="legacy-headline">
          Your PC.
          <br />
          <span className="legacy-headline-muted">Your background.</span>
          <br />
          <span className="legacy-headline-accent">Your call.</span>
        </h1>

        <p className="legacy-hero-description">
          See what starts, what stays running, and what quietly comes back. WinBGM brings Windows
          background activity into focus — with a safety-first way to manage it.
        </p>

        <div className="legacy-hero-actions">
          <a
            className="legacy-button legacy-button-primary"
            href={GITHUB_RELEASES}
            target="_blank"
            rel="noreferrer"
          >
            Download for Windows <span className="legacy-button-arrow">↗</span>
          </a>
          <Link className="legacy-button legacy-button-quiet" to="/features">
            Explore the interface <span>↓</span>
          </Link>
        </div>

        <div className="legacy-hero-meta">
          <span className="legacy-meta-item">
            <i className="legacy-windows-glyph">⊞</i> Windows 10 &amp; 11
          </span>
          <span className="legacy-meta-separator" />
          <span className="legacy-meta-item">
            <i className="legacy-meta-check">✓</i> Portable executable
          </span>
          <span className="legacy-meta-separator" />
          <span className="legacy-meta-item">MIT licensed</span>
        </div>
      </div>

      <div className="legacy-hero-visual">
        <div className="legacy-visual-orbit legacy-orbit-one" />
        <div className="legacy-visual-orbit legacy-orbit-two" />

        <div className="legacy-visual-caption">
          <span className="legacy-caption-dot" /> THE BACKGROUND, MADE VISIBLE
          <span className="legacy-caption-index">01 / 04</span>
        </div>

        <div className="legacy-app-window">
          <div className="legacy-window-titlebar">
            <div className="legacy-window-brand">
              <img src="/winbgm-icon.svg" alt="" />
              <b>WinBGM</b>
              <span className="legacy-window-version">PREVIEW</span>
            </div>
            <div className="legacy-window-controls">
              <span>—</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          <div className="legacy-window-content">
            <aside className="legacy-mock-sidebar">
              <div className="legacy-mock-nav-label">MANAGE</div>
              {mockNav.map((item) => (
                <div
                  className={`legacy-mock-nav${
                    "active" in item && item.active ? " legacy-is-active" : ""
                  }`}
                  key={item.label}
                >
                  <span className="legacy-nav-icon">{item.icon}</span> {item.label}
                  {"count" in item ? <small>{item.count}</small> : null}
                </div>
              ))}

              <div className="legacy-mock-divider" />
              <div className="legacy-mock-nav-label">OTHER</div>
              {mockOtherNav.map((item) => (
                <div className="legacy-mock-nav" key={item.label}>
                  <span className="legacy-nav-icon">{item.icon}</span> {item.label}
                </div>
              ))}

              <div className="legacy-mock-machine">
                <span className="legacy-machine-glyph">▣</span>
                <span>
                  <b>DESKTOP-PC</b>
                  <small>Windows 11 Pro</small>
                </span>
                <i />
              </div>
            </aside>

            <div className="legacy-mock-main">
              <div className="legacy-mock-toolbar">
                <span>Overview</span>
                <div className="legacy-mock-toolbar-actions">
                  <span className="legacy-mock-scan">
                    <i /> Scan now
                  </span>
                  <span>Focus Mode</span>
                  <span>Export</span>
                </div>
              </div>

              <div className="legacy-mock-page-head">
                <div>
                  <div className="legacy-mock-kicker">SYSTEM OVERVIEW</div>
                  <h3>Your background, at a glance.</h3>
                  <p>A live inventory of what’s configured to run on this PC.</p>
                </div>
                <div className="legacy-mock-scan-time">
                  <span className="legacy-live-dot" /> DEMO INVENTORY
                </div>
              </div>

              <div className="legacy-mock-stats">
                <div className="legacy-mock-stat">
                  <span>APPLICATIONS</span>
                  <b>24</b>
                  <small>Across all locations</small>
                </div>
                <div className="legacy-mock-stat">
                  <span>RUNNING NOW</span>
                  <b>08</b>
                  <small>Live process activity</small>
                </div>
                <div className="legacy-mock-stat">
                  <span>NEEDS A LOOK</span>
                  <b className="legacy-stat-warn">03</b>
                  <small>Review recommended</small>
                </div>
                <div className="legacy-mock-stat">
                  <span>MEMORY IN USE</span>
                  <b>
                    1.42<span className="legacy-stat-unit"> GB</span>
                  </b>
                  <small>Background working set</small>
                </div>
              </div>

              <div className="legacy-mock-section-head">
                <b>Application activity</b>
                <span>
                  Grouped by application <span className="legacy-mock-filter">⌕ &nbsp; Filter</span>
                </span>
              </div>

              <div className="legacy-mock-table">
                <div className="legacy-mock-table-head">
                  <span>APPLICATION</span>
                  <span>COMPONENTS</span>
                  <span>ACTIVITY</span>
                  <span>LAUNCH</span>
                </div>
                {mockApps.map((app) => (
                  <div className="legacy-mock-row" key={app.name}>
                    <div className="legacy-mock-app">
                      <span className={`legacy-app-logo ${app.logoClass}`}>◉</span>
                      <span>
                        <b>{app.name}</b>
                        <small>{app.publisher}</small>
                      </span>
                    </div>
                    <span>{app.components}</span>
                    <span>
                      <i className={`legacy-status-dot${app.running ? " legacy-running" : ""}`} />{" "}
                      {app.status}
                    </span>
                    <span className={app.launch === "At sign-in" ? "legacy-launch-on" : undefined}>
                      {app.launch}
                    </span>
                  </div>
                ))}
              </div>

              <div className="legacy-mock-bottom">
                <span>
                  <i className="legacy-shield-mini">✓</i> Changes are backed up before they’re
                  applied
                </span>
                <span>LOCAL MACHINE &nbsp;·&nbsp; READ-ONLY PREVIEW</span>
              </div>
            </div>
          </div>
        </div>

        <div className="legacy-float-note legacy-note-left">
          <span className="legacy-note-icon">⌁</span>
          <span>
            <b>12</b>
            <small>persistence vectors</small>
          </span>
        </div>
        <div className="legacy-float-note legacy-note-right">
          <span className="legacy-note-check">✓</span>
          <span>
            <b>Reversible by design</b>
            <small>Nothing gets deleted</small>
          </span>
        </div>
      </div>

      <div className="legacy-hero-bottom">
        <span>BUILT FOR WINDOWS USERS WHO LIKE TO KNOW WHAT’S RUNNING.</span>
        <span className="legacy-scroll-cue">
          SCROLL TO EXPLORE <span>↓</span>
        </span>
      </div>
    </section>
  );
}
