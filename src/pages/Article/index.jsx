import { useParams } from "react-router-dom" 

function Article() {
    const params = useParams()
    return (
        <div className="container">
            id: {params.id}
        </div>
    )
}

export default Article;