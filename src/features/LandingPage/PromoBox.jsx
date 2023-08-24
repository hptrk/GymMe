import { HiChartBar, HiLightningBolt, HiUsers } from "react-icons/hi";
import IconBox from "./IconBox";
import TextWithTitle from "./TextWithTitle";
import SectionTitle from "./SectionTitle";
import BlurryLight from "../../ui/BlurryLight";
import testimonials from "../../data/testimonials";

function PromoBox({ type }) {
  // Key features => need features array, and SVG icon in the boxes
  // Testimonials => need testimonials array, and profile pic in the boxes
  const features = [
    {
      id: 1,
      icon: <HiChartBar />,
      name: "graphs",
      text: "visualize your progress like never before with rich, informative graphs that bring your fitness journey to life",
    },
    {
      id: 2,
      icon: <HiUsers />,
      name: "friends",
      text: "join forces with friends, track your fitness progress together, making every achievement a shared victory",
    },
    {
      id: 3,
      icon: <HiLightningBolt />,
      name: "workouts",
      text: "tailor your fitness routine with ease, craft personalized workouts and track your gains immediately along the way",
    },
  ];

  const data = {
    data: type === "features" ? features : testimonials,
    iconBoxType: type === "features" ? "icon" : "picture",
    direction: type === "features" ? "flex-row" : "flex-row-reverse",
    side: type === "features" ? "text-left" : "text-right",
  };

  return (
    <div
      className={`relative flex  min-h-[19rem] flex-col items-center justify-center space-y-8 rounded-lg bg-neutral-900 px-4 pt-2 ${
        type === "features" ? "pb-7" : "pb-4"
      } `}
    >
      {data.data.map((item) => (
        <div
          className={`flex ${data.direction} items-center justify-start gap-4`}
          key={item.id}
        >
          <IconBox
            type={data.iconBoxType}
            objectPosition={item.objectPosition}
            key={item.id}
          >
            {item.icon}
          </IconBox>

          <TextWithTitle
            title={item.name}
            text={item.text}
            key={item.name}
            side={data.side}
          />
        </div>
      ))}

      {type === "features" && (
        <span className="absolute bottom-1 right-2 ">
          <SectionTitle
            fontSize={"text-xs font-black"}
            fontWeight={"font-normal"}
          >
            and even more...
          </SectionTitle>
        </span>
      )}

      <BlurryLight positions={"top-[5%] left-5"} />
      <BlurryLight positions={"top-[50%] right-5"} translateY={true} />
      <BlurryLight positions={"bottom-[10%] left-5"} />
    </div>
  );
}

export default PromoBox;
