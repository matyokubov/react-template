import { useNavigate } from "react-router-dom";
import { data } from "../../temp/news"
import { Card } from "./style"

function News() {
    const navigate = useNavigate()
    const goArticle = (articleId) => navigate(`/news/${articleId}`)
    return (
        <div className="container">
            <h2>News</h2>
            <p>
                {
                    data.map(({title, description, id}, i) => {
                        return <Card onClick={() => goArticle(id)} key={i}>
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </Card>
                    })
                }
            </p>
        </div>
    )
}

export default News;