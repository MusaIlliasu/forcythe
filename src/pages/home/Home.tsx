import Articles from "./Articles";
import HeroComponent from "./HeroComponent";
import ProductInnovation from "./ProductInnovation";
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

      {/* Product Innovation Section */}
      <ProductInnovation />

      {/* Article Section */}
      <Articles />
    </>
  )
}

export default Home;