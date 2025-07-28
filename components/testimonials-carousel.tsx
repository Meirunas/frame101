import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";


export default function TestimonialsCarousel() {
const testimonials = [
  {
    img: TestimonialImg01,
    name: "Sara McLean",
    username: "@saramdesigns",
    date: "Jul 20, 2025",
    content:
      "FRAME101 is a sleek, modern developer portfolio. Meirunas nailed the animations and responsive layout — highly recommended for anyone hiring front-end talent.",
  },
  {
    img: TestimonialImg02,
    name: "Lucas Tan",
    username: "@lucast_dev",
    date: "Jul 15, 2025",
    content:
      "The project pages are clean and professional. The stack icons, transitions, and layout really help your skills shine.",
  },
  {
    img: TestimonialImg03,
    name: "Jane Evans",
    date: "Jul 08, 2025",
    content:
      "As a hiring manager, I see a lot of dev portfolios. FRAME101 stands out because it's fast, functional, and shows real UI care. Great first impression.",
    rating: 5,
  },
  {
    img: TestimonialImg04,
    name: "Alex Gomes",
    username: "@gomezui",
    date: "Jul 01, 2025",
    content:
      "Love how easy it is to explore Meirunas's projects. The site flows naturally, and the tech stack is clearly presented. A solid example of Vue + Tailwind work.",
  },
  {
    img: TestimonialImg05,
    name: "Ellie Tran",
    username: "@ellietran",
    date: "Jun 23, 2025",
    content:
      "Really impressed by FRAME101. It's more than a portfolio — it shows professionalism and strong design sense. I bookmarked it as a reference for my own.",
  },
];


  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-linear-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
             Trusted by Learners & Builders
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
