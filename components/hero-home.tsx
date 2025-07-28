import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      <PageIllustration />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-16 pt-32 md:pb-24 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            {/* Tech avatars & badges */}
            <div
              className="mb-8 border-y py-4 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/70),transparent)1]"
              data-aos="zoom-y-out"
            >
              {/* Tech icons using svg for consistency */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  {
                    name: "JavaScript",
                    color: "",
                    viewBox: "0 0 630 630",
                    svg: (
                      <>
                        <rect width="630" height="630" fill="#f7df1e" />
                        <path
                          d="M423.2 492.19c13.14 21.49 30.21 37.29 60.43 37.29 25.38 0 41.59-12.69 41.59-30.21 0-20.99-16.61-28.42-44.53-40.74l-15.29-6.56c-44.24-18.85-73.59-42.48-73.59-92.48 0-46 35.04-81.1 89.84-81.1 39 0 67.03 13.59 87.18 49.12l-47.7 30.63c-10.5-18.85-21.79-26.27-40.48-26.27-18.47 0-30.18 11.71-30.18 26.27 0 18.38 11.71 25.8 38.76 37.29l15.29 6.55c51.92 22.18 81.27 44.74 81.27 95.34 0 54.7-42.99 84.91-100.8 84.91-56.46 0-92.92-26.93-110.67-62.18zM216.97 497.59c10.27 18.2 19.6 33.52 42 33.52 21.45 0 35.04-8.39 35.04-40.99v-223.6h65.25v223.77c0 67.51-39.57 98.26-97.37 98.26-52.23 0-82.49-27.05-97.95-59.21z"
                          fill="#000"
                        />
                      </>
                    ),
                  },

                  {
                    name: "TypeScript",
                    color: "",
                    viewBox: "0 0 27 26",
                    svg: (
                      <path
                        fill="#3178C6"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975H.98608C.441483 26 0 25.5635 0 25.025V.975C0 .436522.441483 0 .98608 0Zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
                      />
                    ),
                  },

                  {
                    name: "React",
                    color: "text-[rgb(8,126,164)]",
                    viewBox: "-10.5 -9.45 21 18.9",
                    svg: (
                      <>
                        <circle cx="0" cy="0" r="2" fill="currentColor" />
                        <g stroke="currentColor" strokeWidth="1" fill="none">
                          <ellipse rx="10" ry="4.5" />
                          <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                          <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                        </g>
                      </>
                    ),
                  },
                  {
                    name: "Vue",
                    color: "",
                    viewBox: "0 0 128 128",
                    svg: (
                      <>
                        <path
                          fill="#42b883"
                          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                        />
                        <path
                          fill="#35495e"
                          d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                        />
                      </>
                    ),
                  },
                  {
                    name: "Vercel",
                    color: "text-black",
                    viewBox: "0 0 74 64",
                    svg: (
                      <path
                        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                        fill="currentColor"
                      />
                    ),
                  },
                  {
                    name: "Express.js",
                    color: "text-black",
                    viewBox: "0 0 48 48",
                    width: 28,
                    height: 28,
                    svg: (
                      <>
                        <path
                          fill="#212121"
                          d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847
        c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287
        C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
                        />
                        <path
                          fill="#212121"
                          d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142
        c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913
        c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478
        C16.798,12.92,22,17.352,22,23v1H4V23.71z"
                        />
                      </>
                    ),
                  },

                  {
                    name: "Node.js",
                    color: "text-[rgb(33,163,102)]", // or use Tailwind's text-green-600 for a similar effect
                    viewBox: "0 0 48 48",
                    svg: (
                      <>
                        <path
                          fill="#21a366"
                          d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682
        c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061
        c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0
        L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483
        c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886
        c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928
        c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932
        v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                        />
                        <path
                          fill="#21a366"
                          d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028
        c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502
        c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053
        c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039
        c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2
        c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                        />
                      </>
                    ),
                  },
                ].map(({ name, color, svg, viewBox }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-medium text-gray-800 shadow-sm hover:shadow-md transition duration-200"
                  >
                    <svg
                      className={`h-5 w-5 ${color}`}
                      viewBox={viewBox}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {svg}
                    </svg>
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 border-y py-3 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/70),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Learn Modern Web Development the Smart Way
            </h1>

            {/* Subtext and buttons */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Master frameworks, tools, and workflows used by top developers.
                Build real projects. Grow your career.
              </p>

              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/70),transparent)1]">
                <div
                  className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:brightness-110 sm:mb-0 sm:w-auto"
                    href="https://www.paypal.com/donate/?hosted_button_id=BZFJRF7FZQUWA"
                  >
                    <span className="relative inline-flex items-center">
                      Donations
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="https://github.com/Meirunas/frame101"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Terminal Preview */}
          <div
            className="mx-auto mt-16 max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-4 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/80),transparent)_1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/80),transparent)_1]">
              {/* Top bar */}
              <div className="relative mb-6 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,theme(colors.gray.600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  Frame101
                </span>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm text-gray-300 [&_span]:block [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-white">
                  npx frame101 login
                </span>
                <span className="animate-[code-2_10s_infinite]">
                  Authenticating...
                </span>
                <span className="animate-[code-3_10s_infinite] text-emerald-400">
                  ✔ Logged in as dev@frame101.com
                </span>
                <span className="animate-[code-4_10s_infinite]">
                  frame101 init my-app
                </span>
                <span className="animate-[code-5_10s_infinite]">
                  Scaffolding React + Tailwind + Vitest...
                </span>
                <span className="animate-[code-6_10s_infinite] text-blue-400">
                  Course loaded: TypeScript in Real Projects
                </span>
                <span className="animate-[code-7_10s_infinite] text-emerald-400">
                  🚀 You're ready to code.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
