import CallToAction from "./CallToAction";
import Quote from "./Quote";
import Image from "../../ui/LandingPageImage";

function Hero() {
  return (
    <section className="mt-8">
      <Quote />
      <Image imageNumber={"1"} />
      <CallToAction />
    </section>
  );
}

export default Hero;
