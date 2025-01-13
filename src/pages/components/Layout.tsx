import { PropsWithChildren } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({children}: PropsWithChildren) => {

  return (
    <>
        <Navigation />
        {children}
        <Footer />
    </>
  )
}

export default Layout;