import SectionTitle from "./SectionTitle";
import LandingPageImage from "./LandingPageImage";

function AllForFree() {
  return (
    <section className="flex flex-col space-y-2 lg:col-start-2">
      <SectionTitle
        marginLeft={"mr-[auto] ml-[5%] sm:ml-[13%] lg:mr-[4%]"}
        alignSelf={"self-end"}
      >
        all for free
      </SectionTitle>
      <LandingPageImage imageNumber={2} />
    </section>
  );
}

export default AllForFree;
