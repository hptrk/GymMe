import AboutUs from "../features/LandingPage/AboutUs";
import AllForFree from "../features/LandingPage/AllForFree";
import Hero from "../features/LandingPage/Hero";
import KeyFeatures from "../features/LandingPage/KeyFeatures";
import Testimonials from "../features/LandingPage/Testimonials";
import LandingPageNav from "../features/LandingPage/LandingPageNav";

function LandingPage() {
  return (
    <div className="h-full bg-neutral-950 font-main text-neutral-50">
      <header className="mb-4">
        <LandingPageNav />
      </header>
      <main className="grid grid-cols-1 gap-10 ">
        <Hero />
        <KeyFeatures />
        <AllForFree />
        <Testimonials />
      </main>
      <footer>
        <AboutUs />
      </footer>
    </div>
  );
}

export default LandingPage;
