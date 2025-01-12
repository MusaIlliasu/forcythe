import { useState } from "react";

import ideaImage from "../../assets/images/spark-spotlight/camera-man.svg";
import designImage from "../../assets/images/spark-spotlight/plan-design.svg";
import developImage from "../../assets/images/spark-spotlight/plan-develop.svg";
import launchImage from "../../assets/images/spark-spotlight/plan-launch.svg";
import Button from "../components/Button";

const SparkSportlight = () => {
  const [currentSportlight, setCurrentSportlight] = useState(0);
  const sportlights = [
    {
      title: "Your vision is unique.",
      content: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
      image: ideaImage
    },
    {
      title: "Crafting the blueprint for success",
      content: "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
      image: designImage
    },
    {
      title: "Turning blueprints into reality.",
      content: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
      image: developImage
    },
    {
      title: "Turning blueprints into reality.",
      content: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
      image: launchImage
    }
  ];

  return (
    <div className="my-28 px-[5%]">
        
        <h2 className="w-full md:max-w-[700px] font-semibold text-4xl mb-12">
            From <span className="text-blue-500">Spark</span> to <span className="text-blue-500">Spotlight:</span> we take you every step of the way to success.
        </h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-40">
          <div className="pb-8">
            <div className="w-max mx-auto md:mx-0 h-[70px] overflow-x-auto no-scrollbar border-2 rounded-full flex justify-evenly md:justify-start items-center gap-1 px-3 mb-10">
              <button onClick={() => setCurrentSportlight(0)} className={`font-semibold ${currentSportlight === 0 ? "bg-white text-primary" : ""} rounded-full py-3 px-3 md:py-3 md:px-6`}>Ideal</button>
              <button onClick={() => setCurrentSportlight(1)} className={`font-semibold ${currentSportlight === 1 ? "bg-white text-primary" : ""} rounded-full py-3 px-3 md:py-3 md:px-6`}>Design</button>
              <button onClick={() => setCurrentSportlight(2)} className={`font-semibold ${currentSportlight === 2 ? "bg-white text-primary" : ""} rounded-full py-3 px-3 md:py-3 md:px-6`}>Develop</button>
              <button onClick={() => setCurrentSportlight(3)} className={`font-semibold ${currentSportlight === 3 ? "bg-white text-primary" : ""} rounded-full py-3 px-3 md:py-3 md:px-6`}>Launch</button>
            </div>

            <div className="w-full md:max-w-[80%]">
              <h2 className="font-semibold text-3xl mb-8">{sportlights[currentSportlight]?.title}</h2>
              <p className="text-lg text-gray-400 mb-8">{sportlights[currentSportlight]?.content}</p>
              
              <Button icon />
            </div>
          </div>

          <div className="w-full max-h-[400px]">
            <img src={sportlights[currentSportlight]?.image} alt="Image" className="w-full h-full object-contain" />
          </div>
        </div>

    </div>
  )
}

export default SparkSportlight;