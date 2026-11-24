import { ArrowRight, CircleCheck, RotateCcw, ShieldCheck, TriangleAlert } from "lucide-react";

import { LegacyHero } from "@/components/legacy-hero";
import { Button } from "@/components/ui/button";
import {
  GITHUB_RELEASES,
  GITHUB_REPOSITORY,
  HeroEyebrow,
  MarketingShell,
  SectionLink,
} from "@/components/winbgm-site";
import { Link, RouterProvider, useRouter } from "@/lib/router";
import { pageFromPath } from "@/lib/routes";

const startupSurfaces = [
  { name: "Windows services" },
  { name: "Scheduled tasks" },
  { name: "Startup folders" },
  { name: "Registry launch entries" },
  { name: "Explorer extensions" },
  { name: "Browser native hosts" },
  { name: "Kernel drivers", note: "Read-only" },
  { name: "Active Setup" },
  { name: "Winlogon hooks", note: "Protected" },
  { name: "WMI subscriptions" },
  { name: "Store app permissions" },
  { name: "Background processes" },
] as const;

const featureRows = [
  {
    title: "Grouped application inventory",
    copy: "Services, scheduled tasks, startup entries, and running processes are grouped under the software that owns them, so one app reads as one app instead of five unrelated rows.",
  },
  {
    title: "Every startup location",
    copy: "Twelve Windows surfaces are scanned together — from startup folders and registry launch entries to Winlogon hooks, Active Setup, and WMI subscriptions.",
  },
  {
    title: "Snapshots and diffs",
    copy: "Save a baseline of the current inventory, compare it with today, and review what was added, removed, or changed without guessing.",
  },
  {
    title: "Change history you can restore",
    copy: "Supported startup changes are recorded before they are applied. Previous state is kept in local history and can be restored from the app.",
  },
  {
    title: "Background cost, made visible",
    copy: "Review background memory use, Windows boot diagnostics, and active sleep blockers where the operating system exposes them.",
  },
  {
    title: "Protected by design",
    copy: "Windows components and recognized security software are left alone. Changes are limited to surfaces WinBGM can verify and safely reverse.",
  },
] as const;

const safetySteps = [
  {
    title: "Scan without changing anything",
    copy: "Inventory collection is read-only. Scanning a PC never writes to startup locations, services, or scheduled tasks.",
  },
  {
    title: "Save the previous state first",
    copy: "Before a supported change is applied, the current value is written to local history. If the backup cannot be saved, the change stops.",
  },
  {
    title: "Apply only the selected change",
    copy: "WinBGM writes the one entry you chose and leaves unrelated startup entries, services, and tasks untouched.",
  },
  {
    title: "Read the result back",
    copy: "After writing, the value is read again. If the change did not stick, WinBGM attempts to put the original state back.",
  },
  {
    title: "Record what happened",
    copy: "The change and its previous value stay in local history, so a later restore does not depend on memory or a screenshot.",
  },
] as const;

const guardrails = [
  {
    title: "Windows components protected",
    copy: "Core operating system entries are not offered as removable startup items.",
  },
  {
    title: "Security software protected",
    copy: "Recognized antivirus and security services are excluded from changes.",
  },
  {
    title: "Unsupported writes blocked",
    copy: "If a surface cannot be verified or restored, WinBGM keeps it read-only.",
  },
  {
    title: "Re-check before writing",
    copy: "The saved value is compared with the live value so drift is caught before a change is applied.",
  },
  {
    title: "Local history only",
    copy: "Snapshots and change history stay on the PC rather than being uploaded.",
  },
  {
    title: "Explicit confirmation",
    copy: "Every supported change is a deliberate action with a visible before and after.",
  },
] as const;

const builds = [
  { arch: "x64", file: "WinBGM-x64.exe" },
  { arch: "ARM64", file: "WinBGM-arm64.exe" },
  { arch: "x86", file: "WinBGM-x86.exe" },
] as const;

const platformFacts = [
  { label: "Operating system", value: "Windows 10 & 11" },
  { label: "Install", value: "Portable executable" },
  { label: "License", value: "MIT" },
  { label: "Source", value: "GitHub" },
] as const;

const downloadSteps = [
  {
    title: "Download the right build",
    copy: "Choose x64 for most PCs, ARM64 for Windows on Arm devices, or x86 for older 32-bit systems.",
  },
  {
    title: "Run a read-only scan",
    copy: "Open WinBGM and review the inventory before changing anything. Scanning does not modify the system.",
  },
  {
    title: "Decide what stays",
    copy: "Make a supported change, verify the result, and keep the previous state in local history.",
  },
] as const;

function HomePage() {
  return (
    <main className="site-main">
      <LegacyHero />

      <section className="home-proof-band" aria-label="WinBGM at a glance">
        <div className="proof-band-inner shell-wrap">
          <div className="proof-item">
            <span className="proof-value">12</span>
            <span className="proof-copy">
              Windows startup and background surfaces in one inventory
            </span>
          </div>
          <div className="proof-item">
            <span className="proof-value">
              <RotateCcw aria-hidden="true" size={20} />
            </span>
            <span className="proof-copy">
              Supported startup changes are recorded first and can be restored from history
            </span>
          </div>
          <div className="proof-item">
            <span className="proof-value">
              <ShieldCheck aria-hidden="true" size={20} />
            </span>
            <span className="proof-copy">
              Windows and recognized security software stay protected
            </span>
          </div>
        </div>
      </section>

      <section className="home-story shell-wrap">
        <div>
          <HeroEyebrow>01 · A clearer picture</HeroEyebrow>
          <h2 className="section-title">Background activity, brought into focus.</h2>
        </div>
        <div className="story-callout">
          <p className="section-copy">
            Windows can start software in more places than a single list can show. WinBGM groups
            related components by app, so you can see what is active, what starts automatically, and
            where it comes from.
          </p>
          <SectionLink to="/features">Explore the product</SectionLink>
        </div>
      </section>

      <section className="home-capabilities">
        <div className="shell-wrap">
          <div className="capabilities-head">
            <div>
              <HeroEyebrow>02 · See the whole trail</HeroEyebrow>
              <h2 className="section-title">From “what is that?” to “I understand.”</h2>
            </div>
            <p className="section-copy">
              A practical view of what starts, what consumes memory, and what has changed.
            </p>
          </div>
          <div className="capability-list">
            <div className="capability-row">
              <span className="capability-index">01</span>
              <h3>Group by application</h3>
              <p>
                Bring services, tasks, startup entries, and running processes together under the
                software that owns them.
              </p>
              <ArrowRight aria-hidden="true" size={16} />
            </div>
            <div className="capability-row">
              <span className="capability-index">02</span>
              <h3>See what changed</h3>
              <p>
                Save a baseline, compare it with today, and review changes in a local history before
                restoring them.
              </p>
              <ArrowRight aria-hidden="true" size={16} />
            </div>
            <div className="capability-row">
              <span className="capability-index">03</span>
              <h3>Find the hidden cost</h3>
              <p>
                Review background memory, Windows boot diagnostics, and active sleep blockers where
                available.
              </p>
              <ArrowRight aria-hidden="true" size={16} />
            </div>
          </div>
          <SectionLink to="/features">All product capabilities</SectionLink>
        </div>
      </section>

      <section className="home-safety shell-wrap">
        <div>
          <HeroEyebrow>03 · Safety before speed</HeroEyebrow>
          <h2 className="section-title">A change should never be a guess.</h2>
          <p className="section-copy">
            WinBGM saves the previous state, checks that it has not changed, then verifies the
            result. If the write does not stick, it attempts to put the original state back.
          </p>
          <SectionLink to="/safety">Read the safety model</SectionLink>
        </div>
        <div className="safety-steps-mini">
          <div className="safety-step-mini">
            <span>01 / SCAN</span>
            <p>
              <strong>Read-only inventory.</strong> Scanning does not change the system.
            </p>
          </div>
          <div className="safety-step-mini">
            <span>02 / SAVE</span>
            <p>
              <strong>Write history first.</strong> If a backup cannot be saved, the change stops.
            </p>
          </div>
          <div className="safety-step-mini">
            <span>03 / VERIFY</span>
            <p>
              <strong>Check the result.</strong> Read-back verification catches a change that did
              not apply.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner shell-wrap">
          <div>
            <HeroEyebrow>WinBGM · For Windows 10 and 11</HeroEyebrow>
            <h2 className="section-title">Know what is running. Decide what stays.</h2>
            <p className="section-copy">
              Portable builds for x64, ARM64, and x86 are listed with the project’s releases.
            </p>
          </div>
          <Button asChild className="site-button site-button-primary">
            <Link to="/download">
              Find your build <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function FeaturesPage() {
  return (
    <main className="site-main">
      <div className="content-page shell-wrap">
        <header className="content-page-intro">
          <HeroEyebrow>Features · Windows 10 &amp; 11</HeroEyebrow>
          <h1 className="content-page-title">
            One inventory for everything running in the background.
          </h1>
          <p className="content-page-deck">
            WinBGM brings startup entries, services, scheduled tasks, and background processes
            together under the applications that own them — then shows what changed and what it
            costs.
          </p>
        </header>

        <section className="feature-surfaces" aria-labelledby="surfaces-title">
          <div>
            <h2 className="feature-aside-title" id="surfaces-title">
              Twelve places Windows can start something.
            </h2>
            <p className="feature-aside-copy">
              A single startup list misses most of them. WinBGM scans each surface and groups the
              results by app, so a service, a scheduled task, and a registry entry can be understood
              as one piece of software.
            </p>
          </div>
          <div className="surface-grid">
            {startupSurfaces.map((surface) => (
              <div className="surface-item" key={surface.name}>
                <CircleCheck aria-hidden="true" size={13} />
                {surface.name}
                {"note" in surface ? <small>{surface.note}</small> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="feature-story-list" aria-label="Product capabilities">
          {featureRows.map((feature, index) => (
            <div className="feature-story-row" key={feature.title}>
              <span className="feature-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </div>
          ))}
        </section>

        <p className="feature-note">
          <ShieldCheck aria-hidden="true" size={14} />
          Changes are limited to surfaces WinBGM can verify and restore. Windows components and
          recognized security software are left alone.
        </p>

        <section className="feature-closing">
          <h2>See the whole trail before you change it.</h2>
          <Button asChild className="site-button site-button-primary">
            <Link to="/safety">
              Read the safety model <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}

function SafetyPage() {
  return (
    <main className="site-main">
      <div className="content-page shell-wrap">
        <header className="content-page-intro">
          <HeroEyebrow>Safety · Scan, save, verify</HeroEyebrow>
          <h1 className="content-page-title">A change should never be a guess.</h1>
          <p className="content-page-deck">
            Every supported change follows the same path: read the current state, save it, apply one
            change, verify the result, and keep a record. If any step fails, WinBGM stops or
            restores the previous value.
          </p>
        </header>

        <section className="safety-flow" aria-labelledby="safety-flow-title">
          <div>
            <h2 className="feature-aside-title" id="safety-flow-title">
              Every supported change follows the same path.
            </h2>
            <p className="feature-aside-copy">
              The safety model is built around one rule: a change is only as good as the ability to
              undo it. WinBGM records the previous state before writing and checks the result after.
            </p>
            <p className="safety-caveat">
              <TriangleAlert aria-hidden="true" size={16} />
              <span>
                WinBGM can only verify and restore changes it supports. Some Windows surfaces are
                read-only by design and are never modified.
              </span>
            </p>
          </div>

          <div>
            <div className="safety-flow-list">
              {safetySteps.map((step, index) => (
                <div className="safety-flow-step" key={step.title}>
                  <span className="safety-flow-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="safety-guardrails" aria-label="Safety guardrails">
              {guardrails.map((guardrail) => (
                <div className="guardrail-item" key={guardrail.title}>
                  <ShieldCheck aria-hidden="true" size={15} />
                  <div>
                    <strong>{guardrail.title}</strong>
                    <p>{guardrail.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-closing">
          <h2>Start with a read-only scan. Decide after you see the inventory.</h2>
          <Button asChild className="site-button site-button-primary">
            <Link to="/download">
              Get WinBGM <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}

function DownloadPage() {
  return (
    <main className="site-main">
      <div className="content-page shell-wrap">
        <header className="content-page-intro">
          <HeroEyebrow>Download · Portable builds</HeroEyebrow>
          <h1 className="content-page-title">Pick the build that matches your PC.</h1>
          <p className="content-page-deck">
            WinBGM ships as a portable executable for x64, ARM64, and x86 Windows 10 and 11 systems.
            Builds are published with each release on the project’s GitHub Releases page.
          </p>
        </header>

        <div className="download-layout">
          <section className="download-main">
            <h2>Latest release</h2>
            <p>
              Download from the official repository. Each release lists the available architectures
              and their published files.
            </p>
            <div className="download-architectures">
              {builds.map((build) => (
                <div className="architecture-row" key={build.arch}>
                  <span className="architecture-name">{build.arch}</span>
                  <span className="architecture-file">{build.file}</span>
                </div>
              ))}
            </div>
            <div className="download-action-row">
              <Button asChild className="site-button site-button-primary">
                <a href={GITHUB_RELEASES} target="_blank" rel="noopener noreferrer">
                  Open releases <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" className="site-button site-button-outline">
                <a href={GITHUB_REPOSITORY} target="_blank" rel="noopener noreferrer">
                  View source
                </a>
              </Button>
            </div>
          </section>

          <aside className="download-aside">
            <h2>Before you run it</h2>
            <p>
              WinBGM is unsigned and portable, so Windows SmartScreen may ask for confirmation the
              first time it runs.
            </p>
            <div className="platform-rows">
              {platformFacts.map((fact) => (
                <div className="platform-row" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
            <p className="download-footnote">
              <TriangleAlert aria-hidden="true" size={13} />
              <span>
                Only download builds from the official repository. Verify the published checksum
                when one is provided.
              </span>
            </p>
          </aside>
        </div>

        <section className="download-steps" aria-label="How to get started">
          {downloadSteps.map((step, index) => (
            <div className="download-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function Site() {
  const { pathname } = useRouter();
  const page = pageFromPath(pathname);

  return (
    <MarketingShell active={page}>
      {page === "features" ? (
        <FeaturesPage />
      ) : page === "safety" ? (
        <SafetyPage />
      ) : page === "download" ? (
        <DownloadPage />
      ) : (
        <HomePage />
      )}
    </MarketingShell>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Site />
    </RouterProvider>
  );
}
