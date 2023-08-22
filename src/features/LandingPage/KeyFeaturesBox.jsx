import { HiChartBar, HiLightningBolt, HiUsers } from "react-icons/hi";
import IconBox from "./IconBox";
import TextWithTitle from "./TextWithTitle";

const features = [
  {
    icon: <HiChartBar />,
    title: "graphs",
    text: "visualize your progress like never before with rich, informative graphs that bring your fitness journey to life",
  },
  {
    icon: <HiUsers />,
    title: "friends",
    text: "join forces with friends, track your fitness progress together, making every achievement a shared victory",
  },
  {
    icon: <HiLightningBolt />,
    title: "workouts",
    text: "tailor your exercises with ease,  personalize your workouts and note them immediately",
  },
];

function KeyFeaturesBox() {
  return (
    <div>
      <IconBox>
        <HiUsers />
      </IconBox>
      <TextWithTitle
        title={"graphs"}
        text={
          "visualize your progress like never before with rich, informative graphs that bring your fitness journey to life"
        }
      />
    </div>
  );
}

export default KeyFeaturesBox;
