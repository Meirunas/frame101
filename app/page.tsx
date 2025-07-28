export const metadata = {
  title: "Home - Frame101",
  description: "Home page",
};

import Hero from "@/components/hero-home";
import Tools from "@/components/tools";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Tools />
      <TestimonialsCarousel />
      <Cta />
    </>
  );
}
