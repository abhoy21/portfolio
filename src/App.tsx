import { Github, Linkedin, Twitter } from "lucide-react";
import GitHubCalendar from "react-github-calendar";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <div className="min-h-screen bg-[#121212] text-gray-300 p-4 sm:p-6 md:p-8 lg:p-16">
        <div className="max-w-5xl mx-auto">
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
                  <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
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
                  <Twitter className="w-5 h-5 hover:text-white transition-colors" />
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
            <p>
              • Developing SEO-optimized websites that deliver seamless user
              experiences and enhance digital performance.
            </p>
            <p>• Currently exploring Go</p>
            <p>• I love building products that make people's lives easier</p>
            <p>• Let's talk how we can work together!</p>
            <p>
              • You can have a look at my resume{" "}
              <a
                href="https://drive.google.com/file/d/1_z9EI2aR3y9nWVS9S69_2j6Q0jBoeF7-/view?usp=sharing"
                target="_blank"
                className="text-cyan-500"
              >
                here
              </a>
            </p>
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
                  <span className="text-gray-500 text-sm">5 users</span>
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
                  <span className="text-gray-500 text-sm">6 users</span>
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
                  <span className="text-gray-500 text-sm">- - -</span>
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

            {/* Categories */}
            <div className="flex flex-wrap gap-2 sm:gap-4 my-8">
              <span className="text-xs px-3 py-1 border border-gray-700 bg-neutral-800/45 rounded-full">
                Web Development
              </span>
              <span className="text-xs px-3 py-1 border border-gray-700 bg-neutral-800/45 rounded-full">
                Frontend
              </span>
              <span className="text-xs px-3 py-1 border border-gray-700 bg-neutral-800/45 rounded-full">
                Backend
              </span>
              <span className="text-xs px-3 py-1 border border-gray-700 bg-neutral-800/45 rounded-full">
                Devops
              </span>
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
              </div>
            </div>

            {/* GitHub Contributions */}
            <div className="my-12">
              <h2 className="text-xl font-bold text-white mb-4">
                GitHub Contributions
              </h2>
              <div className="w-full">
                <GitHubCalendar
                  username="abhoy21"
                  showWeekdayLabels
                  hideColorLegend
                  hideMonthLabels={false}
                  blockSize={10}
                  blockMargin={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
