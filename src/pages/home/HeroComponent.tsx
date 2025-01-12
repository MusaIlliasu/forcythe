import Button from "../components/Button";

import image1 from "../../assets/images/success-in-motion/img-1.svg";
import image2 from "../../assets/images/success-in-motion/img-2.svg";
import image3 from "../../assets/images/success-in-motion/img-3.svg";
import image4 from "../../assets/images/success-in-motion/img-4.svg";
import image5 from "../../assets/images/success-in-motion/img-5.svg";
import image6 from "../../assets/images/success-in-motion/img-6.svg";

const HeroComponent = () => {
    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <>
            <div className="w-full bg-[url('/src/assets/images/hero-bg-pattern.svg')] bg-center bg-cover bg-no-repeat py-4 md:py-6 px-[5%]">
                <div className="w-full bg-white bg-opacity-10 rounded-3xl p-8 md:p-10 lg:p-14 mb-20">
                    <h2 className="font-semibold text-5xl md:text-8xl mb-8">We build <span className="text-blue-500">products</span> that shape a better future</h2>
                    <p className="text-lg md:text-2xl text-dark-gray mb-8">
                    We’re the architects of digital excellence across industries. We redefine business with cutting-edge 
                    digital strategies that invokes sector-wide transformation.
                    </p>

                    <Button icon />
                </div>

                <h2 className="font-semibold text-center text-4xl md:text-5xl">Success in <span className="text-blue-500">Motion</span>  – Our clients’ journey</h2>
                
            </div>
        
            <div className="w-full flex justify-start items-start gap-10 whitespace-nowrap overflow-x-hidden">
            {
                images.map((image, index) => (
                <img key={index} src={image} alt="Image" className="w-full h-full object-cover" />
                ))
            }
            </div>
        </>
    )
}

export default HeroComponent;