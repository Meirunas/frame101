export const metadata = {
  title: "Frameworks Guide - Frame101",
  description: "Frameworks guide page",
};

import CompareTable from "@/components/compare-table";
import ComparePlans from "@/components/compare-frameworks";
import Faqs from "@/components/faqs";

export default function FrameworksGuide() {
  return (
    <>
      <CompareTable />
      <ComparePlans />
      <Faqs />
    </>
  );
}
