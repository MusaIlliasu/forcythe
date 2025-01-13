/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { siteMapLinks } from "./stie-map-links";

interface Props {
    show: boolean;
    handleClose: () => void;
}

const MobileNav = ({show, handleClose}: Props) => {

    const handleParentClose = (ev: any) => {
        const parentEl = ev.target as HTMLDivElement;
        if(parentEl.tagName === "DIV" && parentEl.className.includes("mobile")){
            handleClose();
        }
    }

    return (
        <div onClick={handleParentClose} className={`mobile w-full h-screen backdrop-blur-xl ${show ? "fixed top-0 left-0" : "hidden"} flex justify-end items-start p-6 z-[100] transition-all duration-300 cursor-pointer`}>
            <div className="w-full max-w-[220px] rounded-xl bg-primary text-white flex flex-col gap-4 cursor-default p-8">
            {
                siteMapLinks.map(siteMap => (
                <Link onClick={() => setTimeout(() => handleClose(), 200)} key={siteMap.name} to={siteMap.path} 
                    className={`w-max inline-block`}
                >{siteMap.name}</Link>
                ))
            }
            </div>
        </div>
    )
}

export default MobileNav;