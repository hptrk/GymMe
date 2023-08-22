import CallToAction from "./CallToAction";
import Quote from "./Quote";
import LandingPageImage from "./LandingPageImage";

function Hero() {
  return (
    <section className="mt-8">
      <Quote />
      <LandingPageImage imageNumber={"1"} />
      <CallToAction />
    </section>
  );
}

export default Hero;
