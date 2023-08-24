import CallToAction from "./CallToAction";
import Quote from "./Quote";
import LandingPageImage from "./LandingPageImage";

function Hero() {
  return (
    <section>
      <Quote />
      <LandingPageImage imageNumber={"1"} />
      <CallToAction />
    </section>
  );
}

export default Hero;
