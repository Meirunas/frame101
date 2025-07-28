import PageIllustration from "@/components/page-illustration";

export default function Hero() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-10 md:pt-40">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
              Frame101 Reviews You Can Trust
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
               Read honest opinions, insights, and experiences from developers using today's most popular front-end and back-end frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
