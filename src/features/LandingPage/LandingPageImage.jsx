function LandingPageImage({ imageNumber, isFooterImage = false }) {
  return (
    <img
      src={`../src/assets/landing_page_${imageNumber}.jpg`}
      alt="Workout"
      className={`rounded-sm shadow-behindImage shadow-customred/25 ${
        isFooterImage ? "blur-[1px] brightness-[20%]" : ""
      }`}
    />
  );
}

export default LandingPageImage;

// rounded-sm shadow-behindImage shadow-customred/25
