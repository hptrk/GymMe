import AboutUs from "../features/LandingPage/AboutUs";
import AllForFree from "../features/LandingPage/AllForFree";
import Hero from "../features/LandingPage/Hero";
import KeyFeatures from "../features/LandingPage/KeyFeatures";
import Testimonials from "../features/LandingPage/Testimonials";
import LandingPageNav from "../ui/LandingPageNav";

function LandingPage() {
  return (
    <>
      <header className="bg-purple-800">
        <LandingPageNav />;
      </header>
      <main className="h-screen bg-neutral-950">
        <Hero />
        <KeyFeatures />
        <AllForFree />
        <Testimonials />
        <AboutUs />
      </main>
    </>
  );
}

export default LandingPage;
