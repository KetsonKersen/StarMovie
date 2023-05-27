import { Link } from "react-router-dom"
import { API } from "../../../Services/Request/API"
import {Card} from "./style"


const MovieCard = ({movie})=>{
    return(
        <Link to={`/Movie?&id=${movie.id}`}>
            <Card>
                <div className="ContainerImgCard" style={{backgroundImage:"url("+API.IMG+movie.poster_path+")"}}></div>
                <div className="ContainerInf">
                    <h1>{movie.title}</h1>
                </div>
            </Card>
        </Link>
    )
}
export default MovieCard