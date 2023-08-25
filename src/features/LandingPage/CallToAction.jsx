import Button from "../../ui/Button";
import SectionTitle from "./SectionTitle";

function CallToAction() {
  return (
    <div className="mx-auto mt-8 flex w-max flex-col items-start justify-center space-y-2 lg:relative lg:left-[50%]">
      <SectionTitle alignSelf={"self-start lg:self-center"}>
        begin now
      </SectionTitle>
      <div className="space-x-5">
        <Button type={"full"} size={"big"}>
          register
        </Button>
        <Button type={"transparent"} size={"big"}>
          login
        </Button>
      </div>
    </div>
  );
}

export default CallToAction;
