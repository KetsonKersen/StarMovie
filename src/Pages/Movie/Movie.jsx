import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { API } from "../../Services/Request/API"
import {ContainerBanner , Cast , ContainerVideo} from "./style"
import {motion} from "framer-motion"

const Movie = ()=>{
    const [searchParams] = useSearchParams()
    const MovieId = searchParams.get("id")


    const [video,setVideo] = useState([])
    const [cast,setCast] = useState([])
    const [movie,setMovie] = useState([])
    const [genres,setGenres] = useState([])
    const [companies,setCompanies] = useState([])
    const [dateRealease,setDateRealease] = useState("")

    const getMovie = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
        setGenres(data.genres)
        setDateRealease(data.release_date.split("-").reverse().join("-"))
        setCompanies(data.production_companies)

        console.log(data)
    }
    useEffect(()=>{
        getMovie(`${API.URL}${MovieId}${API.KEY}`)
        window.scroll({top:0
        })
    },[])
    const List = []
    genres.map((item)=>{
        List.push(" "+item.name+" " )
    })

    const getVideo = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setVideo(data.results[0])
    }
    useEffect(()=>{
        getVideo(`https://api.themoviedb.org/3/movie/${MovieId}/videos${API.KEY}`)
    },[])
    const getCast = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setCast(data.cast)

    }
    useEffect(()=>{
        getCast(`https://api.themoviedb.org/3/movie/${MovieId}/credits${API.KEY}`)
    },[])

    return(
        <main className="movieContainer">
            <ContainerBanner style={{backgroundImage: "url("+API.IMG+movie.backdrop_path+")"}}>
                <div className="container-poster" style={{backgroundImage: "url("+API.IMG+movie.poster_path+")"}}></div>
                <div className="container-inf">
                    <h1>{movie.title}</h1>
                    <ul>
                        <li><p>{dateRealease}</p></li>
                        <li><p>{movie.original_language}</p></li>
                        <li><p>{List.toLocaleString()}</p></li>
                        <li><p>{movie.runtime} Minutos.</p></li>
                    </ul>
                    <div className="average">
                        <p><span>{Number(movie.vote_average).toFixed(1)}</span> Avaliação dos usuarios</p>
                    </div>
                    <div className="overview">
                        <h3>Sinopse</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="companies">
                        <h3>Desenvolvido por:</h3>
                        <div>
                            {companies.map((companie)=>{ return companie.logo_path && <img className="imgCompanie" src={`${API.IMG}${companie.logo_path}`} height="40"/> })}
                        </div>
                    </div>
                </div>
            </ContainerBanner>
            <ContainerVideo>
                {video && 
                    <>
                        <h2>Trailer</h2>
                        <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        
                    </>
                }
            </ContainerVideo>
            <Cast>
                <h2>Elenco</h2>
                    <div className="containerCast">
                        {cast.map((person)=> person.profile_path && 
                        <div className="cardCast" key={person.id}>
                            <div className="imgPerson" style={{backgroundImage: "url("+API.IMG+person.profile_path+")"}}></div>
                            <h3>{person.name}</h3>
                            <p>( {person.character} )</p>
                        </div>          
                        )}
                    </div>
            </Cast>
        </main>

    )
}
export default Movie