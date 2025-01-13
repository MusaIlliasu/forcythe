import { Link } from "react-router-dom";
import Button from "./Button";
import { List } from "@phosphor-icons/react";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      {/* Mobile Navigation */}
      <MobileNav
        show={showMobileNav}
        handleClose={() => setShowMobileNav(false)}
      />

      <div className="w-full h-[80px] flex justify-center items-center sticky top-0 left-0 backdrop-blur-xl py-2 px-[5%] z-40">
          <div className="w-full flex justify-between items-center gap-4">
              <div className="flex justify-start items-center gap-10 lg:gap-20">
                  <Link to="/" className="inline-block">
                    <img src="/src/assets/logo/logo.svg" alt="Logo" className="w-full h-full object-cover" />
                  </Link>

                  <div className="hidden md:flex justify-start items-center gap-4">
                    <Link to="#" className="inline-block transition-colors hover:text-blue-500">About</Link>
                    <Link to="#" className="inline-block transition-colors hover:text-blue-500">Services</Link>
                    <Link to="#" className="inline-block transition-colors hover:text-blue-500">Portfolio</Link>
                    <Link to="#" className="inline-block transition-colors hover:text-blue-500">Studio</Link>
                    <Link to="#" className="inline-block transition-colors hover:text-blue-500">Foundation</Link>
                  </div>
              </div>

              <div className="hidden md:flex justify-start items-center">
                <Button />
              </div>

              <List size={24} weight="regular" color="#fff" 
                className="inline-block md:hidden cursor-pointer"
                onClick={() => setShowMobileNav(!showMobileNav)} 
              />
          </div>
      </div>
    </>
  )
}

export default Navigation;