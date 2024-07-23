import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import { Link } from "react-router-dom"
import ArticleBox from "../Components/ArticleBox/ArticleBox"
import articles from "../datas/articles"
export default function Blogs() {
  return (
    <div>
      <Header is={true} />
      <div>
        <div className="bg-primary rounded-[3rem] mt-32 sm:mx-3 md:mx-10 text-primaryLight sm:px-3 md:px-5 py-3">
          <Link to="/">خانه</Link> / مقاله ها
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5 sm:mx-3 md:mx-10 my-10">
          {articles.map((article) => (
            <ArticleBox
              img={article.img}
              title={article.title}
              desc={article.desc}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
