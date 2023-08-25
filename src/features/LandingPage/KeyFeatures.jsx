import PromoBox from "./PromoBox";
import SectionTitle from "./SectionTitle";

function KeyFeatures() {
  return (
    <section className="mx-auto my-auto flex w-4/5 flex-col gap-2 md:w-3/5 lg:w-11/12">
      <SectionTitle alignSelf={"self-end"}>key features</SectionTitle>
      <PromoBox type={"features"} />
    </section>
  );
}

export default KeyFeatures;
