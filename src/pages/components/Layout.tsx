import { PropsWithChildren } from "react";
import Navigation from "./Navigation";

const Layout = ({children}: PropsWithChildren) => {

  return (
    <>
        <Navigation />
        {children}
    </>
  )
}

export default Layout;