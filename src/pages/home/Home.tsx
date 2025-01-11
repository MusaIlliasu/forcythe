import Button from "../components/Button";

const Home = () => {

  return (
    <div className="text-sm">
      <div style={{ minHeight: (window.screen.height - 160) + "px" }} className="w-full bg-[url('/src/assets/images/hero-bg-pattern.svg')] bg-center bg-cover bg-no-repeat py-6 md:py-10 px-[5%]">
        <div className="w-full bg-white bg-opacity-10 rounded-3xl p-8 md:p-10 lg:p-14">
            <h2 className="font-semibold text-4xl md:text-8xl mb-8">We build <span className="text-blue-500">products</span> that shape a better future</h2>
            <p className="text-lg md:text-2xl text-dark-gray mb-8">
              We’re the architects of digital excellence across industries. We redefine business with cutting-edge 
              digital strategies that invokes sector-wide transformation.
            </p>

            <Button icon />
        </div>

      </div>
    </div>
  )
}

export default Home;