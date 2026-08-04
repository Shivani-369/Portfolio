"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "../../public/og_c.jpeg";
import {
  CodeXml,
  Terminal,
  Cpu,
  GitBranch,
  FolderOpen,
  Mail,
  Award,
  ExternalLink,
  Play,
  Sparkles,
  Briefcase,
  GraduationCap,
  Trophy,
  CheckCircle2,
  BadgeCheck,
  Brain,
  MessageCircleQuestion,
  ShieldCheck,
  Container,
  ChartNoAxesCombined,
  Bot,
  Code2,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    { id: "home", label: "main.ts", icon: CodeXml },
    { id: "about", label: "about.md", icon: Terminal },
    { id: "skills", label: "skills.json", icon: Cpu },
    { id: "certifications", label: "certs.key", icon: BadgeCheck },
    { id: "experience", label: "experience.git", icon: GitBranch },
    { id: "projects", label: "projects/", icon: FolderOpen },
    { id: "achievements", label: "milestones.log", icon: Award },
    { id: "contact", label: "contact.exe", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#e2e8f0] relative overflow-x-hidden font-sans selection:bg-orange-500/30 selection:text-orange-400">
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none fixed z-30 transition-transform duration-75 ease-out rounded-full opacity-40 mix-blend-screen hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          top: "-250px",
          left: "-250px",
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Grid Pattern Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

      {/* Subtle Computer Science Doodle Theme Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.09] mix-blend-screen bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cs-doodle.png')",
          backgroundSize: "min(85vw, 750px)",
        }}
      />

      {/* Right Desktop Floating Indicator Bar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent -z-10"></div>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex items-center justify-center w-12 h-12 transition-all duration-300 outline-none"
              aria-label={item.label}
            >
              <div className="absolute right-14 px-3 py-1.5 rounded-md bg-[#121318] border border-orange-500/20 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-[0_0_15px_rgba(249,115,22,0.15)] flex items-center gap-2">
                <span className="text-orange-400">&gt;</span>
                <span className={isActive ? "text-orange-400 font-bold" : "text-slate-400"}>
                  {item.label}
                </span>
              </div>
              <div className="relative w-full h-full flex items-center justify-center">
                {isActive && (
                  <div
                    className="absolute inset-0 m-auto rounded-full border border-orange-500/50 transition-all duration-500 ease-out w-full h-full opacity-100 rotate-180 scale-100"
                    style={{ borderStyle: "dashed" }}
                  />
                )}
                <div
                  className={`rounded-full transition-all duration-300 ease-out flex items-center justify-center relative z-10 ${
                    isActive
                      ? "w-8 h-8 bg-[#0a0b0e] border border-orange-400 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                      : "w-3 h-3 bg-[#1a1c23] border border-slate-700 group-hover:w-4 group-hover:h-4 group-hover:border-orange-400/50 group-hover:bg-orange-500/20 text-slate-400"
                  }`}
                >
                  <IconComponent
                    className={`transition-all duration-300 ${
                      isActive ? "w-4 h-4 opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-0 group-hover:w-3 group-hover:h-3 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Bottom IDE Navigation Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 border-t border-[#1a1c23] bg-[#121318]/95 backdrop-blur-md z-50 lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-7 items-center px-2 py-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  isActive ? "text-orange-400 bg-orange-500/10" : "text-slate-400 hover:text-white"
                }`}
                aria-label={item.label}
              >
                <IconComponent className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Workspace Area */}
      <main className="w-full min-h-screen pb-20 lg:pb-0">
        {/* HERO SECTION (main.ts) */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-0"
        >
          <div className="absolute inset-0 z-0 select-none">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0e] via-transparent to-[#0a0b0e] z-10"></div>
            <div className="absolute top-20 right-20 font-mono text-xs text-orange-500/20 hidden lg:block">
              &lt;System.Init /&gt;
            </div>
            <div className="absolute bottom-20 left-40 font-mono text-xs text-blue-500/20 hidden lg:block">
              while(alive) &#123; code() &#125;
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Left Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-500/30 bg-orange-500/5 text-orange-400 text-xs font-mono mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.8)]"></span>
                  </span>
                  SYSTEM.KERNEL :: RANK 7 B.TECH CSE @ VIT CHENNAI
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-white">Hello, I&apos;m </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-blue-500 relative inline-block">
                    Suja Shivani S A
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/50 rounded-full blur-sm"></div>
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  <span className="text-orange-400 font-mono">&lt;Developer /&gt;</span>{" "}
                  Building Scalable Applications & AI Solutions. Computer Science student skilled in Full-Stack Web Development, Multi-Agent Systems, Data Structures, and ML.
                </p>
              </div>

              {/* Action Buttons styled like OS Kernel launch */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch w-full max-w-xl mx-auto lg:mx-0">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                  className="relative group cursor-pointer flex-1 min-w-[240px]"
                >
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-blue-600 opacity-40 group-hover:opacity-80 transition duration-500"
                    style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                  ></div>
                  <div
                    className="relative bg-[#121318] border border-orange-500/40 p-4 flex items-center gap-4 hover:bg-[#1a1c23] transition-colors shadow-2xl h-full"
                    style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                  >
                    <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-orange-500/10 rounded-sm border border-orange-500/30 group-hover:border-orange-500/60 transition-all">
                      <Terminal className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors truncate">
                          Explore Work
                        </h3>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-orange-400 transition-colors ml-2" />
                      </div>
                      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-1">
                        <div className="h-full bg-orange-500 w-[65%] group-hover:w-[90%] transition-all duration-700 ease-out relative">
                          <div className="absolute inset-0 bg-white/30 animate-pulse-fast"></div>
                        </div>
                      </div>
                      <div className="flex justify-between font-mono text-[9px] text-slate-500">
                        <span className="truncate mr-2">&gt; sudo view_projects</span>
                        <span className="text-orange-400 group-hover:animate-pulse whitespace-nowrap">Active</span>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/Shivani-369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group cursor-pointer sm:w-auto shrink-0"
                >
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-400 opacity-20 group-hover:opacity-60 transition duration-500"
                    style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                  ></div>
                  <div
                    className="relative bg-[#121318] border border-orange-500/30 group-hover:border-orange-500/50 p-4 flex items-center justify-center gap-3 hover:bg-[#1a1c23] transition-colors shadow-xl h-full min-w-[120px]"
                    style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                  >
                    <svg className="w-5 h-5 fill-current text-white group-hover:text-orange-400 transition-colors" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-400 font-mono leading-none mb-0.5">Check out</div>
                      <div className="font-bold text-white group-hover:text-orange-400 transition-colors leading-none">GitHub</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Module Stack Badges */}
              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-2 opacity-90">
                <span className="text-xs font-mono text-slate-500 mr-2 py-1">LOADED_MODULES:</span>
                {["NEXT.JS", "REACT", "PYTHON", "JAVA", "FLUTTER", "POSTGRESQL", "TENSORFLOW"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-orange-500/5 border border-orange-500/20 text-orange-400/90 text-[10px] font-mono rounded tracking-wider hover:bg-orange-500/10 hover:border-orange-500/40 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Right Code Window */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-xl relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl blur-xl -z-10"></div>
                <div className="w-full shadow-2xl overflow-hidden rounded-xl border border-[#1a1c23] bg-[#0a0b0e]">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#121318] border-b border-[#1a1c23]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                      portfolio.tsx
                    </div>
                    <div className="w-10"></div>
                  </div>

                  <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-1.5 overflow-x-auto text-slate-300">
                    <div><span className="text-slate-600 mr-4 select-none">1</span><span className="text-purple-400">import</span> &#123; <span className="text-orange-400">SoftwareEngineer</span> &#125; <span className="text-purple-400">from</span> <span className="text-green-400">&apos;./vit-chennai&apos;</span>;</div>
                    <div><span className="text-slate-600 mr-4 select-none">2</span></div>
                    <div><span className="text-slate-600 mr-4 select-none">3</span><span className="text-purple-400">const</span> <span className="text-yellow-400">Portfolio</span> = () =&gt; &#123;</div>
                    <div className="pl-4"><span className="text-slate-600 mr-4 select-none">4</span><span className="text-purple-400">return</span> (</div>
                    <div className="pl-8"><span className="text-slate-600 mr-4 select-none">5</span>&lt;<span className="text-blue-400">SoftwareEngineer</span></div>
                    <div className="pl-12"><span className="text-slate-600 mr-4 select-none">6</span><span className="text-orange-400">name</span>=<span className="text-green-400">&quot;Suja Shivani S A&quot;</span></div>
                    <div className="pl-12"><span className="text-slate-600 mr-4 select-none">7</span><span className="text-orange-400">cgpa</span>=&#123;<span className="text-amber-400">9.64</span>&#125;</div>
                    <div className="pl-12"><span className="text-slate-600 mr-4 select-none">8</span><span className="text-orange-400">rank</span>=<span className="text-green-400">&quot;7 / 1000+ CSE Students&quot;</span></div>
                    <div className="pl-12"><span className="text-slate-600 mr-4 select-none">9</span><span className="text-orange-400">specialization</span>=<span className="text-green-400">&quot;Full-Stack &amp; AI Systems&quot;</span></div>
                    <div className="pl-8"><span className="text-slate-600 mr-4 select-none">10</span>/&gt;</div>
                    <div className="pl-4"><span className="text-slate-600 mr-4 select-none">11</span>);</div>
                    <div><span className="text-slate-600 mr-4 select-none">12</span>&#125;;</div>

                    <div className="pt-6 flex items-center gap-4">
                      <a
                        href="https://leetcode.com/u/Suja_Shivani_369/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-lg hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                      >
                        <Play className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm text-orange-400">Run LeetCode</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/suja-shivani-573947337/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 border border-slate-700 rounded-lg hover:border-orange-500/30 transition-all duration-300 bg-transparent cursor-pointer"
                      >
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-orange-400 transition-colors">in</span>
                        <span className="font-mono text-sm text-slate-400 group-hover:text-white">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (about.md) */}
        <section id="about" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative border-t border-[#1a1c23]">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-12">
              <Terminal className="w-6 h-6 text-orange-400" />
              <h2 className="font-mono text-2xl lg:text-3xl font-bold">
                <span className="text-slate-500">#</span> About.system
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Profile Card Terminal Box */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#121318] border border-orange-500/30 rounded-2xl p-6 lg:p-8 overflow-hidden">
                  <div className="relative w-44 h-44 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-spin-slow-reverse border-t-transparent border-b-transparent"></div>
                    <div className="absolute inset-2 rounded-full border-2 border-blue-500/30 animate-spin-slow border-l-transparent border-r-transparent"></div>
                    <div className="absolute inset-4 rounded-full overflow-hidden bg-[#0a0b0e] border border-slate-700 shadow-inner">
                      <Image
                        src={profilePic}
                        alt="Suja Shivani S A"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-[#121318] animate-pulse"></div>
                  </div>

                  <div className="font-mono text-xs sm:text-sm space-y-3">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-500">OPERATOR</span>
                      <span className="text-orange-400 font-bold tracking-widest">SUJA SHIVANI S A</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-500">DEGREE</span>
                      <span className="text-slate-200">B.Tech Computer Science & Eng.</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-500">INSTITUTION</span>
                      <span className="text-slate-200">VIT Chennai</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-500">ACADEMIC STANDING</span>
                      <span className="text-amber-400 font-bold">Rank 7 (9.64 CGPA)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">STATUS</span>
                      <span className="text-green-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Active &amp; Open to Internships
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Description & Metrics */}
              <div className="space-y-6">
                <div className="bg-[#121318] border border-[#1a1c23] rounded-2xl p-6 lg:p-8 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
                      <Sparkles className="w-5 h-5 text-orange-400" /> Executive Overview
                    </h3>
                    <a
                      href="https://drive.google.com/file/d/1Lim865OysN_pHMkGpVQzHcvK6JaCz__n/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-mono text-xs font-bold hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
                    >
                      Resume Access <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    I am a Computer Science undergraduate at Vellore Institute of Technology, Chennai, ranking 7th out of 1000+ students in my cohort.
                  </p>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Passionate about modern full-stack web applications, AI/ML models, and multi-agent systems, I focus on engineering scalable solutions with clean architecture and performant code.
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#121318] border border-[#1a1c23] p-4 rounded-xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold font-mono text-orange-400">9.64</div>
                    <div className="text-[11px] text-slate-400 mt-1">Current CGPA</div>
                  </div>
                  <div className="bg-[#121318] border border-[#1a1c23] p-4 rounded-xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold font-mono text-white">Rank 7</div>
                    <div className="text-[11px] text-slate-400 mt-1">Among 1000+ CSE</div>
                  </div>
                  <div className="bg-[#121318] border border-[#1a1c23] p-4 rounded-xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold font-mono text-blue-400">96%</div>
                    <div className="text-[11px] text-slate-400 mt-1">ML Test Accuracy</div>
                  </div>
                  <div className="bg-[#121318] border border-[#1a1c23] p-4 rounded-xl text-center">
                    <div className="text-2xl lg:text-3xl font-bold font-mono text-green-400">2028</div>
                    <div className="text-[11px] text-slate-400 mt-1">Graduation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION (skills.json) */}
        <section id="skills" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative border-t border-[#1c2232]">
          <div className="max-w-6xl mx-auto w-full space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Cpu className="w-6 h-6 text-orange-400" />
                <h2 className="font-mono text-2xl lg:text-3xl font-bold">
                  <span className="text-slate-500">#</span> skills.json
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161a26] border border-[#1c2232] text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                Drag to explore skills universe
              </div>
            </div>

            {/* Interactive Orbiting 3D Skills Sphere Container */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Interactive 3D Sphere Visualizer */}
              <div className="relative h-[380px] sm:h-[450px] w-full bg-[#161a26]/70 border border-[#1c2232] rounded-3xl p-4 flex items-center justify-center overflow-hidden group shadow-2xl">
                {/* Concentric Orbit Rings */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-orange-500/20 animate-spin-slow pointer-events-none" style={{ borderStyle: "dashed" }}></div>
                <div className="absolute w-[220px] h-[220px] rounded-full border border-blue-500/20 animate-spin-slow-reverse pointer-events-none"></div>
                <div className="absolute w-[140px] h-[140px] rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" style={{ borderStyle: "dashed" }}></div>

                {/* Center Nucleus */}
                <div className="z-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-600/20 border border-orange-500/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-2 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  <Cpu className="w-6 h-6 text-orange-400 mb-1 animate-pulse" />
                  <span className="text-[10px] font-mono text-white font-bold tracking-wider">CORE.AI</span>
                </div>

                {/* Floating Orbiting Tech Pills */}
                {[
                  { name: "Java", pos: "top-8 left-12", color: "border-orange-500/40 text-orange-400" },
                  { name: "Python", pos: "top-12 right-14", color: "border-amber-400/40 text-amber-300" },
                  { name: "Next.js", pos: "bottom-16 left-10", color: "border-blue-400/40 text-blue-400" },
                  { name: "React", pos: "bottom-12 right-12", color: "border-cyan-400/40 text-cyan-300" },
                  { name: "PostgreSQL", pos: "top-1/2 left-4 -translate-y-1/2", color: "border-emerald-400/40 text-emerald-400" },
                  { name: "Docker", pos: "top-1/2 right-4 -translate-y-1/2", color: "border-purple-400/40 text-purple-300" },
                  { name: "FastAPI", pos: "top-4 left-1/2 -translate-x-1/2", color: "border-teal-400/40 text-teal-300" },
                  { name: "TypeScript", pos: "bottom-4 left-1/2 -translate-x-1/2", color: "border-indigo-400/40 text-indigo-300" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${item.pos} px-3 py-1.5 rounded-full bg-[#11141d]/90 border ${item.color} text-xs font-mono shadow-lg hover:scale-110 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all cursor-pointer z-20`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Right Column: Structured Module Cards */}
              <div className="space-y-4">
                {/* Languages */}
                <div className="bg-[#161a26] border border-[#1c2232] rounded-2xl p-5 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1c2232]">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-orange-400" />
                      <h3 className="font-mono font-bold text-white text-sm">Languages</h3>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">module_01</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "Dart", "HTML5", "CSS3"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#11141d] border border-[#1c2232] text-xs font-mono text-slate-300 hover:border-orange-400/50 hover:text-orange-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Web */}
                <div className="bg-[#161a26] border border-[#1c2232] rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1c2232]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-blue-400" />
                      <h3 className="font-mono font-bold text-white text-sm">Frameworks &amp; Web</h3>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">module_02</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Flutter", "Tailwind CSS", "TensorFlow", "Keras"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#11141d] border border-[#1c2232] text-xs font-mono text-slate-300 hover:border-blue-400/50 hover:text-blue-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases & Tools */}
                <div className="bg-[#161a26] border border-[#1c2232] rounded-2xl p-5 hover:border-amber-500/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1c2232]">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-amber-400" />
                      <h3 className="font-mono font-bold text-white text-sm">Databases &amp; Tools</h3>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">module_03</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["PostgreSQL", "MySQL", "Docker", "Git & GitHub", "Linux", "AWS", "AutoGen", "REST APIs", "JWT"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-[#11141d] border border-[#1c2232] text-xs font-mono text-slate-300 hover:border-amber-400/50 hover:text-amber-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION (certs.key) */}
        <section id="certifications" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative border-t border-[#1c2232]">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-12">
              <BadgeCheck className="w-6 h-6 text-orange-400" />
              <h2 className="font-mono text-2xl lg:text-3xl font-bold">
                <span className="text-slate-500">#</span> certs.key
              </h2>
            </div>

            {/* Certifications Grid */}
            <div className="bg-[#161a26] border border-[#1c2232] rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="font-mono font-bold text-white text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400" /> Certifications &amp; Credentials
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Career Essentials in Generative AI",
                    issuer: "Microsoft & LinkedIn",
                    icon: BadgeCheck,
                    link: "certificate/CertificateOfCompletion_Career%20Essentials%20in%20Generative%20AI%20by%20Microsoft%20and%20LinkedIn.pdf",
                  },
                  {
                    title: "Ethics in the Age of Generative AI",
                    issuer: "LinkedIn Learning",
                    icon: Brain,
                    link: "certificate/CertificateOfCompletion_Ethics%20in%20the%20Age%20of%20Generative%20AI%20(2).pdf",
                  },
                  {
                    title: "Docker Foundations Professional Certificate",
                    issuer: "Docker Inc",
                    icon: Container,
                    link: "certificate/new/CertificateOfCompletion_Docker%20Foundations%20Professional%20Certificate.pdf",
                  },
                  {
                    title: "DataSprint '25 Finals Hackathon",
                    issuer: "Microsoft Innovators Club Finalist",
                    icon: Trophy,
                    link: "certificate/new/DataSprint'25_Finals.pdf",
                  },
                  {
                    title: "XAI AgentForce",
                    issuer: "AI Agent Certification",
                    icon: Bot,
                    link: "certificate/new/XAI_AgentForce.pdf",
                  },
                  {
                    title: "What Is Generative AI?",
                    issuer: "LinkedIn Learning",
                    icon: Sparkles,
                    link: "certificate/CertificateOfCompletion_What%20Is%20Generative%20AI.pdf",
                  },
                  {
                    title: "Your Top AI Questions Answered",
                    issuer: "AI Literacy Program",
                    icon: MessageCircleQuestion,
                    link: "certificate/CertificateOfCompletion_Your%20Top%20AI%20Questions%20Answered%20AI%20Literacy%20for%20Everyone.pdf",
                  },
                  {
                    title: "LogiTech Participation Certificate",
                    issuer: "Technical Event",
                    icon: ShieldCheck,
                    link: "certificate/LogiTech_part.pdf",
                  },
                  {
                    title: "Effective Sales and Marketing Strategies",
                    issuer: "Professional Development",
                    icon: ChartNoAxesCombined,
                    link: "certificate/new/Effective%20Sales%20and%20Marketing%20Strategies.pdf",
                  },
                ].map((cert, index) => {
                  const IconComp = cert.icon;
                  return (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 bg-[#11141d] p-4 rounded-xl border border-[#1c2232] hover:border-orange-500/40 hover:bg-[#1c2232]/60 transition-all group"
                    >
                      <IconComp className="w-5 h-5 text-orange-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-white truncate group-hover:text-orange-400 transition-colors">
                          {cert.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{cert.issuer}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION (experience.git) */}
        <section id="experience" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative border-t border-[#1a1c23]">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-12">
              <GitBranch className="w-6 h-6 text-orange-400" />
              <h2 className="font-mono text-2xl lg:text-3xl font-bold">
                <span className="text-slate-500">#</span> experience.git
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  role: "Full-Stack Development Intern",
                  company: "UV Farms",
                  type: "Internship",
                  period: "May 2026 – Jun 2026",
                  details: [
                    "Developed full-stack web solutions using Next.js, integrating responsive user interfaces with robust backend API architecture.",
                    "Built core features across ProxiHub, Raaj Hotels, and VidhyaBot platforms, optimizing frontend performance, booking workflows, and document processing.",
                  ],
                },
                {
                  role: "Student Coordinator & Master of Ceremonies (MC)",
                  company: "VNEST (VIT Incubation Center)",
                  type: "Leadership & Event Coordination",
                  period: "2025",
                  details: [
                    "Organized and hosted key events 'Angel Investment and Venture Capital Funding Opportunities' and 'Effective Sales and Marketing Strategies for Startups'.",
                  ],
                },
                {
                  role: "Projects Team Member",
                  company: "CodeChef VIT-Chennai Chapter",
                  type: "Core Team",
                  period: "Jan 2026 – Present",
                  details: [
                    "Collaborating with team members to design technical events, build competitive programming solutions, and contribute to open-source software initiatives.",
                  ],
                },
                {
                  role: "Management Team Member",
                  company: "IEEE Women in Engineering (WIE)",
                  type: "Student Chapter",
                  period: "Sep 2024 – Jan 2026",
                  details: [
                    "Organized technical workshops, webinars, and outreach campaigns to empower and encourage women in engineering and tech streams.",
                  ],
                },
                {
                  role: "Delegate & Model UN Representative",
                  company: "HPS & AVK FairGaze MUN",
                  type: "Diplomacy & Public Speaking",
                  period: "2020 – 2021",
                  details: [
                    "High Commendation – HPS MUN 2020, representing Australia in the United Nations Environment Assembly (UNEA).",
                    "Special Mention – AVK FairGaze MUN 2021, representing the United States of America in the World Health Organization (WHO) committee.",
                  ],
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[#121318] border border-[#1a1c23] rounded-2xl p-6 lg:p-8 hover:border-orange-500/40 transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white font-mono">{exp.role}</h3>
                      <p className="text-orange-400 font-mono text-sm">{exp.company} • {exp.type}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-[#0a0b0e] border border-slate-800 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 text-sm space-y-2 leading-relaxed">
                    {exp.details.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (projects/) */}
        <section id="projects" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative border-t border-[#1a1c23]">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-12">
              <FolderOpen className="w-6 h-6 text-orange-400" />
              <h2 className="font-mono text-2xl lg:text-3xl font-bold">
                <span className="text-slate-500">#</span> projects/
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  tag: "AI & Computer Vision",
                  badge: "DataSprint '25 Finalist",
                  title: "Potato Disease & Defect Detector",
                  desc: "Built a CNN model achieving 96% accuracy to classify hidden internal defects (like hollow heart) from X-ray and leaf images. Integrated with Python/TypeScript backends.",
                  tech: ["Python", "TensorFlow", "Keras", "TypeScript"],
                  repo: "https://github.com/Shivani-369/my-potato-detector-software",
                },
                {
                  tag: "Full-Stack Web",
                  title: "Personal Finance Tracker",
                  desc: "A secure expense and investment tracking platform featuring JWT authentication, responsive dashboards with Recharts, and custom PostgreSQL database designs.",
                  tech: ["React.js", "Node.js", "PostgreSQL", "JWT"],
                  repo: "https://github.com/lavishjha2024-w/Personal-Finance-Tracker",
                },
                {
                  tag: "Mobile App",
                  title: "ShineShelf App",
                  desc: "A smart E-Library management system & cross-platform mobile application. Integrated Material 3 design, Provider state management, REST APIs, and local secure storage.",
                  tech: ["Flutter", "Dart", "REST APIs", "Provider"],
                  repo: "https://github.com/NEHA4151/ShineShelf_app",
                },
                {
                  tag: "Web Game",
                  title: "Wordwars: Word Guessing Game",
                  desc: "A clean browser-based word puzzle game where players guess a 5-letter word in six tries using color-coded feedback and a mobile-friendly keyboard.",
                  tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
                  link: "https://wordwars-pi.vercel.app/",
                },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-[#121318] border border-[#1a1c23] rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        {proj.tag}
                      </span>
                      {proj.badge && (
                        <span className="text-[10px] font-mono text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {proj.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                      {proj.repo && (
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-orange-400 font-semibold transition-colors bg-[#11141d] px-3 py-1.5 rounded-lg border border-[#1c2232]"
                        >
                          Repository <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-400 hover:text-orange-300 font-semibold transition-colors bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20"
                        >
                          Play Demo <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono bg-[#0a0b0e] text-slate-400 px-2.5 py-1 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION (milestones.log) */}
        <section id="achievements" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative border-t border-[#1a1c23]">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-12">
              <Award className="w-6 h-6 text-orange-400" />
              <h2 className="font-mono text-2xl lg:text-3xl font-bold">
                <span className="text-slate-500">#</span> milestones.log
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-[#121318] border border-[#1a1c23] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold font-mono text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="text-orange-400" /> Academic Distinction
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Secured <strong className="text-orange-400">Rank 7 in B.Tech CSE (Core) among 1000+ students</strong> at VIT Chennai with a CGPA of 9.64.
                </p>
                <ul className="text-slate-400 text-xs sm:text-sm space-y-2 list-disc list-inside">
                  <li>High Commendation HPS MUN 2020 representing Australia in UNEA.</li>
                  <li>Special Mention AVK FairGaze MUN 2021 representing USA in WHO.</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#121318] border border-[#1a1c23] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold font-mono text-white mb-4 flex items-center gap-2">
                  <Trophy className="text-amber-400" /> DataSprint 24-Hour Hackathon
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Competed among <strong>75+ teams</strong> in the hackathon hosted by Microsoft Innovators Club and sponsored by iAgami &amp; MONOLITH.
                </p>
                <ul className="text-slate-400 text-xs sm:text-sm space-y-2 list-disc list-inside">
                  <li>Pioneered CNN model achieving <strong>96% test accuracy</strong>.</li>
                  <li>Designed &amp; fine-tuned custom architecture using TensorFlow/Keras.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION (contact.exe) */}
        <section id="contact" className="py-24 px-6 lg:px-12 border-t border-[#1a1c23] bg-[#0a0b0e] relative text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold text-white mb-4">
              &lt;<span className="text-orange-400">Let&apos;s Connect</span> /&gt;
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Open to full-stack engineering internships, AI/ML research collaborations, and open-source opportunities.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#121318] border border-[#1a1c23] p-4 rounded-2xl mb-12">
              <div className="flex items-center gap-3 text-slate-200 font-mono text-sm px-4">
                <Mail className="w-5 h-5 text-orange-400" />
                sujashivani.s2024@vitstudent.ac.in
              </div>
              <a
                href="mailto:sujashivani.s2024@vitstudent.ac.in"
                className="bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-500/20"
              >
                Send Signal &rarr;
              </a>
            </div>

            <p className="text-xs font-mono text-slate-500">
              &copy; 2026 Suja Shivani S A. Engineered with Next.js.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
