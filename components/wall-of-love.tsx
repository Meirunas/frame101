"use client";

import useMasonry from "@/utils/useMasonry";
import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";


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


export default function WallOfLove() {
  const masonryContainer = useMasonry();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Testimonials grid */}
          <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial
                  testimonial={testimonial}
                  className="w-full rotate-0 md:group-odd:!-rotate-1 md:group-even:!rotate-1"
                >
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
