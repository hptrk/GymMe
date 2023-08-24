import LandingPageImage from "./LandingPageImage";
import SectionTitle from "./SectionTitle";
import Logo from "../../ui/Logo";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import Button from "../../ui/Button";

function AboutUs() {
  return (
    <section className=" mt-10">
      <SectionTitle marginLeft={"ml-[5%]"}>about us</SectionTitle>

      <div className="relative">
        <LandingPageImage imageNumber={3} isFooterImage={true} />

        <span className="absolute left-[50%] top-2 w-full -translate-x-1/2 text-center text-xl ">
          this is a personal solo project made by <br />
          <b className="font-bold">Patrik Horánszki</b>
        </span>

        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        <div className="absolute bottom-0 flex w-full items-end justify-between px-4">
          <AiFillGithub size={40} />
          <span className="font-thin">
            &copy;2023 GymMe | all rights reserved{" "}
          </span>
          <Button type={"full"} size={"square"}>
            <AiOutlineArrowUp size={40} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
