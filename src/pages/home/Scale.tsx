import Button from "../components/Button"

const Scale = () => {
  return (
    <div className="px-[5%] mt-32">
        <h2 className="w-full md:max-w-[600px] font-semibold text-4xl mx-auto text-center mb-10">
            <span className="text-blue-500">Ready to Scale?</span> <br />Join successful brands that chose us as their <span className="text-blue-500">growth accelerator</span> 
        </h2>

        <div className="flex justify-center items-center">
            <Button />
        </div>
    </div>
  )
}

export default Scale;