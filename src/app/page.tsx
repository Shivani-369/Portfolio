import Image from "next/image";
import profilePic from "../../public/og_c.jpeg";
import {
  Sparkles,
  Code2,
  ArrowRight,
  Briefcase,
  Code,
  Award,
  GraduationCap,
  Trophy,
  Cpu,
  Layers,
  Database,
  CheckCircle2,
  BadgeCheck,
  Brain,
  Sparkles as SparklesIcon,
  MessageCircleQuestion,
  ShieldCheck,
  Container,
  ChartNoAxesCombined,
  Bot,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-darkbg text-slate-100 font-sans antialiased selection:bg-brand-500 selection:text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-darkbg/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="text-brand-500">&lt;</span>Suja Shivani S A<span className="text-brand-500">/&gt;</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-brand-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-500 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-brand-500 transition-colors">Milestones</a>
            <a href="#skills" className="hover:text-brand-500 transition-colors">Skills</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:sujashivani.s2024@vitstudent.ac.in" className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-500/25">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" /> Rank 7 | B.Tech CSE @ VIT Chennai
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src={profilePic}
              alt="Profile photo"
              width={176}
              height={176}
              priority
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-brand-500/30 shadow-2xl shadow-brand-500/20"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Building Scalable Applications & <span className="gradient-text">AI Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Computer Science student skilled in Full-Stack Development, Data Structures, and ML. Driven to solve complex technical challenges and engineer efficient, scalable systems.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
            <a href="https://www.linkedin.com/in/suja-shivani-573947337/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-200 hover:bg-brand-500/20 hover:border-brand-500/50 transition-all" aria-label="LinkedIn">
              <span>in</span> LinkedIn
            </a>
            <a href="https://github.com/Shivani-369" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://leetcode.com/u/Suja_Shivani_369/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-all" aria-label="LeetCode">
              <Code2 className="w-4 h-4" /> LeetCode
            </a>
            <a href="mailto:sujashivani.s2024@vitstudent.ac.in" className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-all" aria-label="Email">
              <span>@</span> Email
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#projects" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-all glow-effect flex items-center gap-2">
              View My Work <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-200 px-8 py-3.5 rounded-lg text-base font-semibold transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Key Metrics / Stats Section */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">9.64</h3>
            <p className="text-sm text-slate-400">Current CGPA (VIT)</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">Rank 7</h3>
            <p className="text-sm text-slate-400">Among 1000+ CSE Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">96%</h3>
            <p className="text-sm text-slate-400">ML Model Accuracy (DataSprint)</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">2028</h3>
            <p className="text-sm text-slate-400">Expected Graduation</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-7 h-7 text-brand-500" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Work Experience & Leadership</h2>
        </div>

        <div className="space-y-8">
          {/* Experience Item 1 */}
          <div className="bg-cardbg border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Full-Stack Development Intern</h3>
                <p className="text-brand-500 font-medium">UV Farms • Internship</p>
              </div>
              <span className="text-sm text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">May 2026 – Jun 2026</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm leading-relaxed">
              <li>Developed full-stack web solutions using Next.js, integrating responsive UIs with robust backend APIs.</li>
              <li>Built core features across <strong>ProxiHub</strong>, <strong>Raaj Hotels</strong>, and <strong>VidhyaBot</strong>, optimizing frontend performance, booking workflows, and document processing systems.</li>
            </ul>
          </div>

          {/* Experience Item 2 */}
          <div className="bg-cardbg border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Projects Team Member</h3>
                <p className="text-brand-500 font-medium">CodeChef VIT-Chennai Chapter</p>
              </div>
              <span className="text-sm text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">Jan 2026 – Present</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Collaborating with team members to design technical events, build competitive programming solutions, and contribute to open-source software initiatives within the chapter.
            </p>
          </div>

          {/* Experience Item 3 */}
          <div className="bg-cardbg border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Management Team Member</h3>
                <p className="text-brand-500 font-medium">IEEE Women in Engineering (WIE)</p>
              </div>
              <span className="text-sm text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">Sep 2024 – Jan 2026</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Organized technical workshops, webinars, and outreach campaigns to empower and encourage women in engineering and tech streams.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-7 h-7 text-brand-500" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-cardbg border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-brand-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-500/10 text-brand-500 border border-brand-500/20">AI & Computer Vision</span>
                  <span className="text-xs text-amber-400 font-semibold">DataSprint &apos;25 Finalist</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Potato Disease & Defect Detector</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Built a CNN model achieving 96% accuracy to classify hidden internal defects (like hollow heart) from X-ray and leaf images. Integrated with Python/TypeScript backends.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Keras</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-cardbg border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-brand-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Full-Stack Web</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Personal Finance Tracker</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  A secure expense and investment tracking platform featuring JWT authentication, responsive dashboards with Recharts, and custom PostgreSQL database designs.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">React.js</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">JWT</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-cardbg border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-brand-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Mobile App</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ShineShelf App</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Cross-platform social-commerce application. Integrated material 3 design, Provider state management, REST APIs, and local secure storage.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Flutter</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Dart</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">REST APIs</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Provider</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-cardbg border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-brand-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">AI & Multi-Agent Systems</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Orcha: Multi-Agent Supply Chain Orchestrator</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Built an AI-powered multi-agent supply chain orchestration platform that optimized logistics routes using geospatial, weather, carbon, and financial data. Developed an explainable decision-support dashboard with interactive route maps, comparative scorecards, and real-time disruption simulations, while integrating a fault-tolerant FastAPI backend with LLM fallback models and API rate-limit recovery for reliable AI inference.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">FastAPI</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Streamlit</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">AutoGen</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Plotly</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">LLMs</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-cardbg border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-brand-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Web Game</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Wordwars: A Word Guessing Game</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  A clean browser-based word puzzle game where players guess a 5-letter word in six tries using color-coded feedback and a mobile-friendly keyboard.
                </p>
                <a href="https://wordwars-pi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-500 hover:text-brand-400 transition-colors">
                  Play it here &rarr;
                </a>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">HTML5</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">CSS3</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Milestones & Achievements */}
      <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-7 h-7 text-brand-500" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Academic Journey & Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic Success Card */}
          <div className="bg-cardbg border border-slate-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="text-brand-500" /> Academic Excellence
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Secured <strong>Rank 7 in the B.Tech CSE (Core) branch among 1000+ students</strong>.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Began Semester 1 with a 9.36 GPA and consistently elevated academic standing through discipline and practical project work, achieving a <strong>CGPA of 9.65</strong> by Semester 3.
            </p>
            <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside mt-4">
              <li>Have won High Commendation HPS MUN 2020 representing Australia in UNEA.</li>
              <li>Special Mention in AVK FairGaze MUN 2021 representing United States of America in WHO.</li>
            </ul>
          </div>

          {/* Hackathon Spotlight Card */}
          <div className="bg-cardbg border border-slate-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Trophy className="text-amber-400" /> DataSprint 24-Hour Hackathon
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Competed among <strong>75+ teams</strong> at the hackathon hosted by Microsoft Innovators Club and sponsored by iAgami & MONOLITH.
            </p>
            <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
              <li>Pioneered model development achieving <strong>96% test accuracy</strong>.</li>
              <li>Designed & fine-tuned custom CNN architecture using TensorFlow and Keras.</li>
              <li>Visualized training loss/accuracy curves with Matplotlib and hyperparameter tuning.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/30 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Cpu className="w-7 h-7 text-brand-500" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Technical Proficiency</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cardbg border border-slate-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-brand-500" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Java</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Python</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">C</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">C++</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">JavaScript</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Dart</span>
              </div>
            </div>

            <div className="bg-cardbg border border-slate-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-500" /> Web & Mobile
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">React.js</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Next.js</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Node.js</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Express.js</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Flutter</span>
              </div>
            </div>

            <div className="bg-cardbg border border-slate-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-brand-500" /> Databases & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">PostgreSQL</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">MySQL</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Git & GitHub</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Docker</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">Linux</span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-sm border border-slate-700">AWS</span>
              </div>
            </div>
          </div>

          {/* Certifications Row */}
          <div className="mt-8 bg-cardbg border border-slate-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-500" /> Certificates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
              <a href="/certificate/CertificateOfCompletion_Career%20Essentials%20in%20Generative%20AI%20by%20Microsoft%20and%20LinkedIn.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <BadgeCheck className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Career Essentials in Generative AI</div>
                  <div className="text-xs text-slate-400 mt-1">Microsoft & LinkedIn</div>
                </div>
              </a>
              <a href="/certificate/CertificateOfCompletion_Ethics%20in%20the%20Age%20of%20Generative%20AI%20(2).pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <Brain className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Ethics in the Age of Generative AI</div>
                  <div className="text-xs text-slate-400 mt-1">LinkedIn Learning</div>
                </div>
              </a>
              <a href="/certificate/CertificateOfCompletion_SummerInternship.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <Briefcase className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Summer Internship Certificate</div>
                  <div className="text-xs text-slate-400 mt-1">Completion Credential</div>
                </div>
              </a>
              <a href="/certificate/CertificateOfCompletion_What%20Is%20Generative%20AI.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <SparklesIcon className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">What Is Generative AI?</div>
                  <div className="text-xs text-slate-400 mt-1">LinkedIn Learning</div>
                </div>
              </a>
              <a href="/certificate/CertificateOfCompletion_Your%20Top%20AI%20Questions%20Answered%20AI%20Literacy%20for%20Everyone.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <MessageCircleQuestion className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Your Top AI Questions Answered</div>
                  <div className="text-xs text-slate-400 mt-1">AI Literacy for Everyone</div>
                </div>
              </a>
              <a href="/certificate/LogiTech_part.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <ShieldCheck className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">LogiTech Participation Certificate</div>
                  <div className="text-xs text-slate-400 mt-1">Event Participation</div>
                </div>
              </a>
              <a href="/certificate/new/CertificateOfCompletion_Docker%20Foundations%20Professional%20Certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <Container className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Docker Foundations Professional Certificate</div>
                  <div className="text-xs text-slate-400 mt-1">Docker Inc</div>
                </div>
              </a>
              <a href="/certificate/new/DataSprint'25_Finals.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <Trophy className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">DataSprint &apos;25 Finals</div>
                  <div className="text-xs text-slate-400 mt-1">Hackathon Finalist Certificate</div>
                </div>
              </a>
              <a href="/certificate/new/Effective%20Sales%20and%20Marketing%20Strategies.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <ChartNoAxesCombined className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Effective Sales and Marketing Strategies</div>
                  <div className="text-xs text-slate-400 mt-1">Professional Learning</div>
                </div>
              </a>
              <a href="/certificate/new/XAI_AgentForce.pdf" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800 hover:border-brand-500/40 transition-all">
                <Bot className="text-brand-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">XAI AgentForce</div>
                  <div className="text-xs text-slate-400 mt-1">AI Agent Certification</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-slate-800 bg-darkbg text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect</h3>
          <p className="text-slate-400 text-sm mb-6">Open to software engineering internships and collaborative technical projects.</p>
          <p className="text-slate-300 text-sm mb-8">
            <Mail className="inline w-4 h-4 mr-1 text-brand-500" /> sujashivani.s2024@vitstudent.ac.in
          </p>

          <p className="text-xs text-slate-500">&copy; 2026 Suja Shivani S A. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
