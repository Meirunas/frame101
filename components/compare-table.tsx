"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";

export default function FrameworkShowcase() {
  const [showFrontend, setShowFrontend] = useState(true);

  const frontendCards = [
    {
      title: "React",
      description: "The most popular JavaScript library for building UI.",
      features: [
        "Component-based architecture",
        "JSX syntax and virtual DOM",
        "Hooks for state and side effects",
        "Rich ecosystem (React Router, Redux, etc.)",
        "Large community and job market"
      ]
    },
    {
      title: "Vue",
      description: "A progressive framework that’s simple and powerful.",
      features: [
        "Easy to learn and get started",
        "Declarative templates",
        "Composition & Options APIs",
        "Built-in transitions and reactivity",
        "Great for beginners and small-to-medium projects"
      ]
    },
    {
      title: "Next.js",
      description: "React framework for building full-stack apps.",
      features: [
        "File-based routing",
        "Static and dynamic rendering",
        "Built-in SEO and metadata support",
        "API routes and server-side logic",
        "Optimized for performance with Vercel"
      ]
    }
  ];

  const backendCards = [
    {
      title: "Express.js",
      description: "A minimalist and flexible Node.js web framework.",
      features: [
        "Fast to set up REST APIs",
        "Middleware support for routing, auth, etc.",
        "Works well with MongoDB, MySQL, and PostgreSQL",
        "Large ecosystem of plugins",
        "Perfect for building APIs and backend logic",
      ]
    },
    {
      title: "Node.js",
      description: "JavaScript runtime environment for server-side code.",
      features: [
        "Run JavaScript outside the browser",
        "Non-blocking, event-driven architecture",
        "Package management via npm",
        "Used in APIs, CLIs, web servers, and tools",
        "Foundation for many modern stacks (MERN, MEVN)"
      ]
    }
  ];

  const cardsToShow = showFrontend ? frontendCards : backendCards;

  return (
    <section className="relative">
      <PageIllustration />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
              Explore Frameworks With Confidence
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
                Frame101 is your guide to understanding modern front-end and
                back-end frameworks. Our goal is to help learners at all levels
                grasp the concepts, strengths, and use cases of popular
                technologies. No sign-ups. No pricing. Just clear, structured
                content.
              </p>
            </div>
          </div>

          <div className="m-auto mb-16 flex max-w-xs justify-center">
            <div className="relative mx-6 flex w-full rounded-lg bg-gray-200 p-1">
              <span
                className="pointer-events-none absolute inset-0 m-1"
                aria-hidden="true"
              >
                <span
                  className={`absolute inset-0 w-1/2 transform rounded-sm bg-white shadow-sm transition ${
                    showFrontend ? "translate-x-0" : "translate-x-full"
                  }`}
                ></span>
              </span>
              <button
                className={`relative flex-1 p-1 text-sm font-medium transition ${
                  showFrontend ? "" : "text-gray-900"
                }`}
                onClick={() => setShowFrontend(true)}
                aria-pressed={showFrontend}
              >
                Frontend
              </button>
              <button
                className={`relative flex-1 p-1 text-sm font-medium transition ${
                  showFrontend ? "text-gray-500" : ""
                }`}
                onClick={() => setShowFrontend(false)}
                aria-pressed={!showFrontend}
              >
                Backend
              </button>
            </div>
          </div>

          <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-3 xl:gap-6">
            {cardsToShow.map((card, index) => (
              <div
                key={index}
                className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                <div className="mb-4">
                  <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                    {card.title}
                  </div>
                  <div className="grow text-sm text-gray-700">
                    {card.description}
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-500">
                  {card.features.map((feature, i) => (
                    <li className="flex items-start" key={i}>
                      <svg
                        className="mr-2 mt-0.5 h-3 w-3 shrink-0 fill-current text-emerald-500"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              // 

              // 
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
