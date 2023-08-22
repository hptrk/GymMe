function LandingPageImage({ imageNumber }) {
  console.log(imageNumber);
  return (
    <img
      src={`../src/assets/landing_page_${imageNumber}.jpg`}
      alt="Workout"
      className="shadow-behindImage shadow-customred/25"
    />
  );
}

export default LandingPageImage;
