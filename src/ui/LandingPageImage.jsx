function LandingPageImage({ imageNumber }) {
  return (
    <img
      src={`../src/assets/landing_page_${imageNumber}.jpg`}
      alt="Workout"
      className="shadow-behindImage shadow-customred/25 rounded-sm"
    />
  );
}

export default LandingPageImage;
