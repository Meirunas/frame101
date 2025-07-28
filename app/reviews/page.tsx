export const metadata = {
  title: "Reviews - Frame101",
  description: "Reviews page",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";

export default function Reviews() {
  return (
    <>
      <Hero />
      <WallOfLove />
    </>
  );
}
