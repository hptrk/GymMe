import AboutUs from "../features/LandingPage/AboutUs";
import AllForFree from "../features/LandingPage/AllForFree";
import Hero from "../features/LandingPage/Hero";
import KeyFeatures from "../features/LandingPage/KeyFeatures";
import Testimonials from "../features/LandingPage/Testimonials";
import LandingPageNav from "../features/LandingPage/LandingPageNav";

function LandingPage() {
  return (
    <div className="bg-neutral-950 font-main text-neutral-50">
      <header>
        <LandingPageNav />
      </header>
      <main className="h-screen">
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
