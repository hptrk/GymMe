function LandingPageImage({ imageNumber, isFooterImage = false }) {
  return (
    <img
      src={`../src/assets/landing_page_${imageNumber}.jpg`}
      alt="Workout"
      className={`mx-auto w-full rounded-sm object-cover shadow-behindImage shadow-customred/25 sm:w-9/12 sm:rounded-lg lg:w-40 ${
        isFooterImage
          ? "h-96 rounded-none object-[100%,45%] blur-[1px] brightness-[20%] sm:!w-full sm:rounded-none "
          : ""
      }`}
    />
  );
}

export default LandingPageImage;

// rounded-sm shadow-behindImage shadow-customred/25
