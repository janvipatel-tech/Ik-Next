import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import LearningPaths from "@/components/LearningPaths";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import WebinarCTA from "@/components/WebinarCTA";
import SuccessStories from "@/components/SuccessStories";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Press from "@/components/Press";
import Footer from "@/components/Footer";
import Interactions from "@/components/Interactions";

export default function Home() {
  return (
    <>
      <Interactions />
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <LearningPaths />
        <WhyChoose />
        <Stats />
        <WebinarCTA />
        <SuccessStories />
        <Instructors />
        <Testimonials />
        <Press />
      </main>
      <Footer />
    </>
  );
}
