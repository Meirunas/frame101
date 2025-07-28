"use client";

import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <style>{`
        @keyframes floatUpDownFast {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Frame101 helps developers learn, build and get hired
            </h2>
          </div>

          {/* Planet visual with floating tags */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />

                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />

                  {/* Floating Labels with strong animation */}
                  <div>
                    <div
                      className="absolute -left-28 top-16 z-10 opacity-90"
                      style={{
                        animation: "floatUpDownFast 6s ease-in-out infinite",
                      }}
                    >
                      <div className="rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white shadow-md">
                        TypeScript
                      </div>
                    </div>

                    <div
                      className="absolute left-56 top-7 z-10 opacity-80"
                      style={{
                        animation:
                          "floatUpDownFast 8s ease-in-out infinite 0.3s",
                      }}
                    >
                      <div className="rounded-full bg-purple-600 px-4 py-1 text-sm font-medium text-white shadow-md">
                        Vue.js
                      </div>
                    </div>
                    <div
                      className="absolute -left-20 bottom-24 z-10 opacity-70"
                      style={{
                        animation:
                          "floatUpDownFast 10s ease-in-out infinite 0.6s",
                      }}
                    >
                      <div className="rounded-full bg-emerald-600 px-4 py-1 text-sm font-medium text-white shadow-md">
                        React.js
                      </div>
                    </div>
                    <div
                      className="absolute bottom-32 left-64 z-10 opacity-90"
                      style={{
                        animation:
                          "floatUpDownFast 5s ease-in-out infinite 0.9s",
                      }}
                    >
                      <div className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-medium text-white shadow-md">
                        Git & GitHub
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {[
              {
                title: "Interactive Lessons",
                description:
                  "Learn with hands-on coding modules, quizzes, and projects designed to help you master modern frameworks faster.",
              },
              {
                title: "Real-World Projects",
                description:
                  "Build portfolio-ready apps with guided projects using React, Vue, Tailwind, and more. Export to GitHub or deploy instantly.",
              },
              {
                title: "Performance Insights",
                description:
                  "Track your code performance, analyze bundle size, and get tips to optimize real-world apps just like a pro developer.",
              },
              {
                title: "Custom Sandbox",
                description:
                  "Run your code directly in our built-in sandbox environment with version control and instant preview. No setup needed.",
              },
              {
                title: "Localisation Support",
                description:
                  "Build multilingual projects and learn how to use i18n tools to scale your frontend apps globally.",
              },
              {
                title: "Smart Documentation",
                description:
                  "Every lesson is linked with contextual docs and examples. Need help? Hover or click to learn without losing focus.",
              },
            ].map(({ title, description }, i) => (
              <article key={i}>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                  </svg>
                  <span>{title}</span>
                </h3>
                <p className="text-[15px] text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
