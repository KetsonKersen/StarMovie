import Categorys from "../../Categorys/Categorys"
import { ContainerMoviePage } from "./style"
import { useState , useEffect } from "react"
import { API } from "../../../Services/Request/API"
import MovieCard from "../MovieCard/MovieCard"
import { useSearchParams } from "react-router-dom"
import Pagination from "../Pagination/Pagination"


const Movies = ({title,typeList})=>{
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const currentPage = searchParams.get("p")

    const [state,setState] = useState([])
    const [totalPage,setTotalPage] = useState(0)
    
    const GetMovies = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setState(data.results)
        data.total_pages > 500 ? setTotalPage(500) : setTotalPage(data.total_pages)
    }
    useEffect(()=>{
        GetMovies(`${API.URL}${typeList}${API.KEY}&with_genres=${query}&page=${currentPage}`)
    
    },[currentPage,query])

    return(
        <main>
            <Categorys/>
            <div className="ContainerCenter">
                <h1>{title}</h1>
                <ContainerMoviePage>
                    {state.map((movie)=> movie.poster_path && 
                        <MovieCard key={movie.id} movie={movie}/>
                    )}
                </ContainerMoviePage>
                <div>
                    <Pagination totalPage={totalPage}/>
                </div>
            </div>
        </main>
    ) 
}
export default Movies