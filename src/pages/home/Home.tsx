import HeroComponent from "./HeroComponent";
import SparkSportlight from "./SparkSportlight";
import TransformativeStories from "./TransformativeStories";

const Home = () => {

  return (
    <>
      {/* Hero Section */}
      <HeroComponent />

      {/* Transformative Stories' Section */}
      <TransformativeStories />
      
      {/* Spark Sportlight Section */}
      <SparkSportlight />

    </>
  )
}

export default Home;