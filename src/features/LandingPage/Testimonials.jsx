import PromoBox from "./PromoBox";
import SectionTitle from "./SectionTitle";

function Testimonials() {
  return (
    <section className="mx-auto my-auto flex w-4/5 flex-col gap-2 md:w-3/5 lg:col-start-1 lg:row-start-2 lg:w-11/12 lg:justify-self-end">
      <SectionTitle alignSelf={"self-end"}>from our community</SectionTitle>
      <PromoBox type={"testimonials"} />
    </section>
  );
}

export default Testimonials;
