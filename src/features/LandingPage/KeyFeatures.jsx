import PromoBox from "./PromoBox";
import SectionTitle from "./SectionTitle";

function KeyFeatures() {
  return (
    <section className="mx-auto mt-10 flex w-4/5 flex-col gap-2">
      <SectionTitle alignSelf={"end"}>key features</SectionTitle>
      <PromoBox />
    </section>
  );
}

export default KeyFeatures;
