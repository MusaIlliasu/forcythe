import Button from "../components/Button";

import img1 from "../../assets/images/articles/img-1.webp"
import img2 from "../../assets/images/articles/img-2.webp"
import img3 from "../../assets/images/articles/img-3.webp"
import { Link } from "react-router-dom";

const Articles = () => {
    const articleLists = [
        {
            title: "Will AI take over Art?",
            image: img1
        },
        {
            title: "Crytocurrency vs Tokens",
            image: img2
        },
        {
            title: "Cryptocurrency and Crypto asset",
            image: img3
        }
    ];

  return (
    <div style={{background: "linear-gradient(to bottom, rgb(12, 38, 69) -20%, rgb(3, 5, 22) 80%)"}} className="mb-20">
        <div className="pt-48 px-[5%]">
            <div className="flex justify-between items-center gap-10 flex-wrap mb-14">
                <h2 className="font-semibold text-4xl">Read our articles, news and product blog</h2>

                <Button icon />
            </div>

            <div className="w-full xl:max-w-[90%]x mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* border border-secondary shadow-md shadow-secondary */}
                {
                    articleLists.map(article => (
                        <Link to="#" key={article.title} className="article w-full min-h-[200px] rounded-2xl overflow-hidden transition-all duration-300 pb-4">
                            <div className="article-image w-full h-[200px] rounded-2xl overflow-hidden mb-6">
                                <img src={article.image} alt="Image" className="w-full h-full object-cover transition-all duration-300" />
                            </div>

                            <div className="article-content w-full border-l-2 transition-all duration-300 px-4">
                                <h2 className="font-semibold mb-2">Blog</h2>
                                <div className="flex justify-start items-center gap-2 text-gray-400 mb-4">The Reformist <span className="inline-block w-[7px] h-[7px] rounded-full bg-white"></span> May 29th, 2024</div>
                                <p className="font-bold text-xl">{article.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Articles;