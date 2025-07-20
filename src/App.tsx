import { Github, Linkedin } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />
      <div className="min-h-screen bg-[#121212] text-gray-300 p-4 sm:p-6 md:p-8 lg:p-16">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Header */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Hi, I'm Abhoy Sarkar
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/abhoy-sarkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 text-blue-500 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/abhoy21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://x.com/kakarottwts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    imageRendering="optimizeQuality"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    viewBox="0 0 512 462.799"
                    fill="currentColor"
                    className="w-4 h-4 hover:text-white transition-colors"
                  >
                    <path
                      fillRule="nonzero"
                      d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/8583007404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -2 24 24"
                    className="w-5 h-5 text-green-500 hover:text-white transition-colors"
                    fill="currentColor"
                  >
                    <path d="M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z" />
                    <path d="m14.842 12.045-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z" />
                  </svg>
                </a>
              </div>
              <a href="mailto:sarkar.ab07@gmail.com">
                <span className="text-sm sm:text-base text-gray-500 hover:text-gray-200 transition-transform ease-in-out duration-300">
                  sarkar.ab07@gmail.com
                </span>
              </a>
            </div>
          </header>

          {/* Bio */}
          <div className="space-y-2 mb-8">
            <p>• I'm a full-stack engineer from India.</p>
            {/* <p>• Currently exploring Go</p> */}
            <p>• Let's talk how we can work together!</p>
            <p className="flex items-center gap-2">
              • You can have a look at my{' '}
              <a
                href="https://drive.google.com/file/d/1c-LJV2TUvaGes3ygd0s-gGwLL-rckJGQ/view?usp=sharing"
                target="_blank"
                className="text-cyan-500 flex items-center gap-2"
              >
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="12"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"></path>
                  </svg>
                </span>
                Resume
              </a>
            </p>
          </div>

          {/* Experience */}
          <div className="my-12">
            <h2 className="text-xl font-bold text-white mb-4">Experience</h2>
            <div className="space-y-6">
              <div className=" bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 p-4 rounded-xl border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-medium text-white">
                    CronLab Technologies
                  </h3>
                  <span className="text-sm text-gray-400">Kolkata, WB</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cyan-400">SDE Intern</span>
                  <span className="text-xs text-gray-500">
                    January 2025 – March 2025
                  </span>
                </div>
                <ul className="space-y-2 pl-5 list-disc text-sm text-gray-400">
                  <li>
                    Implemented responsive UI components using Next.js and
                    TypeScript within a Monorepo architecture, enhancing
                    development scalability across 3+ internal tools
                  </li>
                  <li>
                    Crafted clean landing pages for local businesses using
                    Next.js and Tailwind CSS, improving user engagement and
                    reducing page load times
                  </li>
                  <li>
                    Conducted Lighthouse audits to identify and fix performance,
                    accessibility, and SEO issues, achieving performance scores
                    above 90 across deployed pages
                  </li>
                  <li>
                    Dockerized a Node.js application by designing and optimizing
                    Dockerfiles, significantly reducing image size and build
                    time, thereby streamlining CI/CD workflows and enhancing
                    deployment efficiency
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Projects</h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/abhoy21/yaadho.git"
                      target="_blank"
                    >
                      <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="https://yaadho.vercel.app/" target="_blank">
                      <h3 className="text-gray-200 hover:text-gray-500">
                        Yaad-Ho
                      </h3>
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    - your second brain organised efficiently
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">11 users</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/abhoy21/writex.git"
                      target="_blank"
                    >
                      <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://writex-sand.vercel.app/dashboard"
                      target="_blank"
                    >
                      <h3 className="text-gray-200 hover:text-gray-500">
                        Writex
                      </h3>
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    - Generate SEO optimized contents for your business needs
                    with AI
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">12 users</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/abhoy21/mindsketch.git"
                      target="_blank"
                    >
                      <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/abhoy21/mindsketch.git"
                      target="_blank"
                    >
                      <h3 className="text-gray-200 hover:text-gray-500">
                        MindSketch
                      </h3>
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    - Realtime collaborative digramming tool
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">3 users</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/abhoy21/next-contest-app.git"
                      target="_blank"
                    >
                      <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://next-contest-app.vercel.app/"
                      target="_blank"
                    >
                      <h3 className="text-gray-200 hover:text-gray-500">
                        Next Contest
                      </h3>
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    - Never Miss a Coding Contest Again
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">50+ visits</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/abhoy21/linkedev.git"
                      target="_blank"
                    >
                      <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="https://linkedev.vercel.app/" target="_blank">
                      <h3 className="text-gray-200 hover:text-gray-500">
                        Linkedev
                      </h3>
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    - find developers based on their github profile
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">- - -</span>
                </div>
              </div>
            </div>

            {/* GitHub Contributions */}
            <div className="my-12">
              <h2 className="text-xl font-bold text-white mb-4">
                GitHub Contributions
              </h2>
              <div className="w-full rounded-lg border border-gray-700 bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 p-4">
                <GitHubCalendar
                  username="abhoy21"
                  showWeekdayLabels
                  hideColorLegend
                  hideMonthLabels={false}
                  blockSize={10}
                  blockRadius={4}
                  blockMargin={4}
                  colorScheme="dark"
                  fontSize={12}
                  year={2025}
                />
              </div>
            </div>

            {/* Tech Stack Categories - Compact Version */}
            <div className="my-8">
              <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Frontend */}
                <div className=" bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 p-3 rounded-xl border border-gray-700">
                  <h3 className="text-sm text-cyan-400 mb-2 font-medium">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Javascript
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Typescript
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      React
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Next.js
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                {/* Backend */}
                <div className=" bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 p-3 rounded-xl border border-gray-700">
                  <h3 className="text-sm text-green-400 mb-2 font-medium">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Node.js
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Python - FastAPI
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      WebSocket
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Nestjs
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Express JS
                    </span>
                  </div>
                </div>

                {/* Databases */}
                <div className=" bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 p-3 rounded-xl border border-gray-700">
                  <h3 className="text-sm text-purple-400 mb-2 font-medium">
                    Databases & ORM
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      PostgreSQL
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      MongoDB
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Redis
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Prisma
                    </span>
                  </div>
                </div>

                {/* DevOps & Tools */}
                <div className=" bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 p-3 rounded-xl border border-gray-700">
                  <h3 className="text-sm text-amber-400 mb-2 font-medium">
                    DevOps
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Git CI/CD
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Docker
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Nginx
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      MonoRepo
                    </span>
                    {/* <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Prometheus
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Grafana
                    </span> */}
                  </div>
                </div>

                {/* Cloud Services */}
                <div className=" bg-gradient-to-br from-neutral-950 via-neutral-900/40 to-neutral-950 p-3 rounded-xl border border-gray-700">
                  <h3 className="text-sm text-blue-400 mb-2 font-medium">
                    Cloud
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      AWS
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Azure
                    </span>
                    <span className="text-xs px-2 py-1 bg-neutral-700/50 rounded-lg text-gray-300">
                      Digital Ocean
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Writings */}
            <div className="my-12">
              <h2 className="text-xl font-bold text-white mb-4">Blogs</h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <a
                    href="https://medium.com/@sarkar.ab07/understanding-monorepo-and-turborepo-7c80e0961fcb"
                    className="text-white hover:text-gray-500 text-sm sm:text-base"
                  >
                    Understanding Monorepo and Turborepo
                  </a>
                  <span className="text-gray-500 text-sm">Dec 31, 2024</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <a
                    href="https://medium.com/@sarkar.ab07/understanding-the-cap-theorem-in-distributed-systems-e4ef2a9537a4"
                    className="text-white hover:text-gray-500 text-sm sm:text-base"
                  >
                    Understanding the CAP theorem in Distributed Systems
                  </a>
                  <span className="text-gray-500 text-sm">Jan 02, 2025</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <a
                    href="https://medium.com/@sarkar.ab07/web-performance-tuning-real-world-tips-to-make-your-site-blazing-fast-25170ff97cc5"
                    className="text-white hover:text-gray-500 text-sm sm:text-base"
                  >
                    Web Performance Tuning: Real-World Tips to Make Your Site
                    Blazing Fast 🚀
                  </a>
                  <span className="text-gray-500 text-sm">Apr 24, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
