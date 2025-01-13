import { InstagramLogo, ApplePodcastsLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { siteMapLinks } from "./stie-map-links";

const Footer = () => {
  const [termsAgreement, setTermsAgreement] = useState(false);

  return (
    <footer className="mt-32 px-[5%] text-sm pb-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 mb-10">
        {/* Subscription */}
        <div>
          <div className="w-full rounded-full border overflow-hidden flex justify-start items-center mb-4">
            <input type="email" placeholder="Your Email Address"
              className="w-full border-none outline-none bg-transparent py-2 px-5"
            />
            <button className=" h-full bg-white text-primary py-2 px-5">Subscribe</button>
          </div>

          <div onClick={() => setTermsAgreement(!termsAgreement)} className="flex justify-start items-center gap-2 cursor-pointer">
            <div className="w-5 min-w-5 h-5 border rounded-full flex justify-center items-center">
              <div className={`w-2 h-2 ${termsAgreement ? "bg-white" : ""}  rounded-full transition-colors divide-fuchsia-300`}></div>
            </div>
            <p>I agree to receive other notifications from Forcythe</p>
          </div>
        </div>

        {/* About Forcythe */}
        <div>
          <Link to="/" className="inline-block w-[100px] mb-4">
            <img src="/src/assets/logo/logo.svg" alt="Logo" className="w-full h-full object-cover" />
          </Link>

          <p className="text-gray-400 mb-8">
            We are the growth company for businesses looking to scale. We are dedicated to transforming 
            businesses with bespoke digital solutions that drive growth.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-2">
            <Link to="#" className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1">
              <span className="font-bold text-xl">f</span>
            </Link>

            <Link to="#" className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1">
              <InstagramLogo size={20} weight="regular" />
            </Link>

            <Link to="#" className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1">
              <XLogo size={20} weight="regular" />
            </Link>

            <Link to="#" className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1">
              <span className="font-bold text-xl">in</span>
            </Link>

            <Link to="#" className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1">
              <YoutubeLogo size={20} weight="regular" />
            </Link>

            <Link to="#" className="w-8 h-8 border border-blue-500 text-blue-500 rounded-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1">
              <ApplePodcastsLogo size={20} weight="regular" />
            </Link>
          </div>
        </div>

        {/* Site Map */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Company</h2>
          {
            siteMapLinks.map((siteMap, index) => (
              <Link key={siteMap.name} to={siteMap.path} className={`block ${(siteMapLinks.length - 1) !== index ? "mb-2" : "" } `}>{siteMap.name}</Link>
            ))
          }
        </div>
      </div>

      <hr className="border border-blue-500 mb-4" />

      <p className="text-center md:text-left text-xs md:text-sm">Copyright &copy; {new Date().getFullYear()} Forcythe. All rights reserved.</p>
    </footer>
  )
}

export default Footer;