import PromoBox from "./PromoBox";
import SectionTitle from "./SectionTitle";

function Testimonials() {
  return (
    <section className="mx-auto mt-10 flex w-4/5 flex-col gap-2">
      <SectionTitle alignSelf={"end"}>from our community</SectionTitle>
      <PromoBox type={"testimonials"} />
    </section>
  );
}

export default Testimonials;
