import Link from "next/link";
import Hero from "@/components/homeSections/hero";
import WhyChooseUs from "@/components/homeSections/whyChooseUs";
import HowItWorks from "@/components/homeSections/howItWorks";

// Step 2: Define the HomePage component
export default function HomePage() {
  return (
    <>
      <Hero />

      <HowItWorks />
      <WhyChooseUs />
    </>
  );
}
