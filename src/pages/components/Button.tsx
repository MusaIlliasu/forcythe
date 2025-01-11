import { Link } from "react-router-dom"

const Button = () => {

  return (
    <>
        <Link to="#" className="btn font-semibold flex justify-center items-center gap-1 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300 py-3 px-6 z-10">
            <span>Book a Call</span>
        </Link>
        <span className="w-full inline-block font-semibold rounded-full absolute -left-[0.2rem] -bottom-[0.4rem] text-xs text-transparent select-none border-2 border-dotted transition-all duration-300 py-3 px-6 z-0">
            ""
        </span>
    </>
  )
}

export default Button