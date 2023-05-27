import {ContainerMoviePage} from "../components/Global/Movies/style"
import { useState , useEffect } from "react"
import { API } from "../Services/Request/API"
import MovieCard from "../components/Global/MovieCard/MovieCard"
import { useSearchParams } from "react-router-dom"
import Pagination from "../components/Global/Pagination/Pagination"

const Search = ()=>{

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const currentPage = searchParams.get("p")
    
    const [state,setState] = useState([])
    const [totalPage,setTotalPage] = useState(1)


    const GetMovies = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setState(data.results)
        data.total_pages > 500 ? setTotalPage(500) : setTotalPage(data.total_pages)
    }


    useEffect(()=>{
        GetMovies(`${API.SEARCH}${API.KEY}&query=${query}&page=${currentPage ? currentPage : 1}`)
    },[query,currentPage])


    return(
        <main>
            <div className="ContainerCenter">
                <h1>Resultadoes para: <span className="query">{query.toLocaleUpperCase()}</span></h1>
                <ContainerMoviePage>
                    {state.map((movie)=>{return <MovieCard key={movie.id} movie={movie}/>})}
                </ContainerMoviePage>
                <div>
                    <Pagination totalPage={totalPage}/>
                </div>
            </div>
        </main>
    )
}
export default Search