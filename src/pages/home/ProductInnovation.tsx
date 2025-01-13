import { Stack } from "@phosphor-icons/react";

const ProductInnovation = () => {
    const products = [
        {
            title: "Experience",
            content: "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth."
        },
        {
            title: "Quick Support",
            content: "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth."
        },
        {
            title: "Cost Savings",
            content: "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality."
        }
    ];

    return (
        <div style={{background: "linear-gradient(to top, rgb(12, 38, 69) -20%, rgb(3, 5, 22) 100%)"}} className="pt-10 md:pt-20 ">
            <div className="px-[5%] mb-24 md:mb-36">
                <h2 className="w-full font-semibold text-center text-[#b3d0f2] text-4xl md:mx-auto mb-10">Your best call for B2B/B2C product innovation</h2>

                <div className="w-full xl:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        products.map(prod => (
                            <div key={prod.title} className="w-full min-h-[200px] rounded-xl bg-primary p-6">
                                <div className="w-[60px] h-[60px] rounded-lg bg-blue-400 text-white flex justify-center items-center mb-4">
                                    <Stack size={40} weight="bold" className="" />
                                </div>

                                <h2 className="font-semibold text-xl mb-4">{prod.title}</h2>
                                <p className="text-gray-400">{prod.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full md:max-w-[80%] h-[250px] md:h-[400px] flex justify-center items-end mx-auto bg-[url('/src/assets/images/arc.svg')] bg-top bg-contain bg-no-repeat">
                <div className="w-[55%] md:max-w-[500px]">
                    <h1 className="font-semibold text-center text-xl md:text-3xl mb-4 md:mb-12">We build solutions that help <span className="text-blue-500">businesses</span> of all sizes to <span className="text-blue-500">scale</span></h1>

                    <div className="flex justify-center items-center gap-8">
                        <div className="w-max">
                            <p className="font-bold text-2xl md:text-4xl text-blue-500">50+</p>
                            <p className="text-xs md:text-lg">Clients</p>
                        </div>
                        <div className="w-max">
                            <p className="font-bold text-2xl md:text-4xl text-blue-500">120+</p>
                            <p className="text-xs md:text-lg">Projects</p>
                        </div>
                        <div className="w-max">
                            <p className="font-bold text-2xl md:text-4xl text-blue-500">10+</p>
                            <p className="text-xs md:text-lg">Team Leads</p>
                        </div>
                        <div className="w-max">
                            <p className="font-bold text-2xl md:text-4xl text-blue-500">10+</p>
                            <p className="text-xs md:text-lg">Glorious Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInnovation;