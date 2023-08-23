import { HiChartBar, HiLightningBolt, HiUsers } from "react-icons/hi";
import IconBox from "./IconBox";
import TextWithTitle from "./TextWithTitle";
import BlurryLight from "../../ui/BlurryLight";
const features = [
  {
    id: 1,
    icon: <HiChartBar />,
    title: "graphs",
    text: "visualize your progress like never before with rich, informative graphs that bring your fitness journey to life",
  },
  {
    id: 2,
    icon: <HiUsers />,
    title: "friends",
    text: "join forces with friends, track your fitness progress together, making every achievement a shared victory",
  },
  {
    id: 3,
    icon: <HiLightningBolt />,
    title: "workouts",
    text: "tailor your fitness routine with ease, craft personalized workouts and track your gains immediately along the way",
  },
];
function PromoBox() {
  return (
    <div className="relative flex flex-col space-y-8 rounded-lg bg-neutral-900 px-4 pb-6 pt-2">
      {features.map((feature) => (
        <div className="flex items-center justify-start gap-4" key={feature.id}>
          <IconBox key={feature.id}>{feature.icon}</IconBox>
          <TextWithTitle
            title={feature.title}
            text={feature.text}
            key={feature.title}
          />
        </div>
      ))}
      <BlurryLight positions={"top-[5%] left-5"} />
      <BlurryLight positions={"top-[50%] right-5"} translateY={true} />
      <BlurryLight positions={"bottom-[10%] left-5"} />
    </div>
  );
}

export default PromoBox;
