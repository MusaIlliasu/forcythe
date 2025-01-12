// Logos
import stacksLogo from "../../assets/images/tran-stories/starks.svg";
import executiveProsLogo from "../../assets/images/tran-stories/executive-pros-logo.svg";
import stacaiLogo from "../../assets/images/tran-stories/stacai.svg";
import iwariaLogo from "../../assets/images/tran-stories/iwaria.svg";
import beaupreneurLogo from "../../assets/images/tran-stories/beaupreneur.svg";
import { useEffect, useRef, useState } from "react";

// Images
import starkImg from "../../assets/images/tran-stories/imgs/john.svg";
import executiveImage from "../../assets/images/tran-stories/imgs/executive-pro-ceo.svg";
import stacImage from "../../assets/images/tran-stories/imgs/edwin.svg";
import iwariaImage from "../../assets/images/tran-stories/imgs/iwaria-founder.svg";
import beaupreneurImage from "../../assets/images/tran-stories/imgs/christina.svg";


const TransformativeStories = () => {
  // const [storyLogos, setStoryLogos] = useState([
  //   {
  //     id: 1,
  //     name: "Starks",
  //     logo: stacksLogo,
  //     height: "",
  //     left: 0
  //   }, 
  //   {
  //     id: 2,
  //     name: "",
  //     logo: executiveProsLogo,
  //     height: "h-[32px]",
  //     left: 0
  //   },
  //   {
  //     id: 3,
  //     name: "",
  //     logo: stacaiLogo,
  //     height: "",
  //     left: 0
  //   },
  //   {
  //     id: 4,
  //     name: "",
  //     logo: iwariaLogo,
  //     height: "",
  //     left: 0
  //   },
  //   {
  //     id: 5,
  //     name: "",
  //     logo: beaupreneurLogo,
  //     height: "",
  //     left: 0
  //   }
  // ]);
  
  const storyLogos = [
    {
      name: "Starks",
      logo: stacksLogo,
      height: "",
      details: {
        title: "Starks Associate",
        content: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
        name: "John, Management",
        image: starkImg
      }
    },
    {
      name: "",
      logo: executiveProsLogo,
      height: "h-[32px]",
      details: {
        title: "ExecutivePros",
        content: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
        name: "Testimony, Co-founder",
        image: executiveImage
      }
    },
    {
      name: "",
      logo: stacaiLogo,
      height: "",
      details: {
        title: "Stac AI",
        content: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
        name: "Edwin, Former CTO",
        image: stacImage
      }
    },
    {
      name: "",
      logo: iwariaLogo,
      height: "",
      details: {
        title: "Iwaria",
        content: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
        name: "Iwaria, Founder",
        image: iwariaImage
      }
    },
    {
      name: "",
      logo: beaupreneurLogo,
      height: "",
      details: {
        title: "Beaupreneur",
        content: "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
        name: "Christiana, Founder",
        image: beaupreneurImage
      }
    }
  ];
  const [currentStory, setCurrentStory] = useState(0);


  useEffect(() => {

    const clear = setTimeout(() => {
      setCurrentStory(currentStory === storyLogos.length - 1 ? 0 : currentStory + 1);
    }, 6000); // Swap interval - 6 seconds for testing purpose.

    return () => clearTimeout(clear);

  }, [currentStory, storyLogos.length]);


  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  // Function to handle the position of elements
  // const getElementOffsets = () => {
  //   elementsRef.current.forEach((el, index) => {
  //     const rect = el?.getBoundingClientRect();

  //     console.log(`Element ${index} offset from left:`, rect?.left);
  //   });
  // };

  // useEffect(() => {

  //   getElementOffsets();

  // }, []);


  return (
    <div className="mt-20 px-[5%]">
      <h2 className="w-full md:max-w-[700px] font-semibold text-center text-4xl md:mx-auto mb-12">Discover the <span className="text-blue-500">transformative stories</span> of startups that scaled new heights with us</h2>

      <div className="w-full mb-10">
        <div className="w-full overflow-x-auto no-scrollbar mb-6">
          <div className="w-full min-w-[800px] h-[70px] rounded-full border-2 border-[#0c2645] grid grid-cols-5 justify-center items-center overflow-hidden">
            {
              storyLogos.map((storyLogo, index) => (
                  <div ref={(el) => (elementsRef.current[index] = el)} 
                    key={index} onClick={() => setCurrentStory(index)}
                    className={`w-full h-full flex justify-center items-center gap-2 transition-colors duration-300 ${currentStory === index ? "bg-[#0c2645]" : ""} cursor-pointer`}
                  >
                    <img src={storyLogo.logo} alt="Logo" className={`w-max ${storyLogo.height ? storyLogo.height : "h-[20px]"}`} />
                    {storyLogo.name ? <span className="font-semibold">{storyLogo.name}</span> : null}
                  </div>
                ))
            }
          </div>
        </div>

        <div className="w-full md:max-w-[550px] min-h-[250px] bg-[#0c2645] rounded-xl grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-4 transition-all duration-300 p-6">
          <div className="w-full md:col-span-3">
            <h2 className="text-lg  mb-2">{storyLogos[currentStory].details.title}</h2>
            <p className="text-lg text-gray-300 mb-2">{storyLogos[currentStory].details.content}</p>
            <p className="text-lg ">{storyLogos[currentStory].details.name}</p>
          </div>

          <div className="w-full md:col-span-2 rounded-lg overflow-hidden">
            <img src={storyLogos[currentStory].details.image} alt="Image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default TransformativeStories;