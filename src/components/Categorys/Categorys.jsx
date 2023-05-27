import {BannerCategorys} from "./style"
import { useState, useEffect } from "react"
import {AiFillCloseCircle} from "react-icons/ai"
import { useNavigate, useSearchParams } from "react-router-dom"


const list = []

const Categorys = ()=>{
    const [state,setState] = useState([])
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const currentPage = searchParams.get("p")

    const GetCategory = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
        setState(data.genres)
    }
    
    useEffect(()=>{
        GetCategory(`https://api.themoviedb.org/3/genre/movie/list?api_key=625c8dd173eb52378010ab89241d4dd8&language=pt-BR`)
    },[])
    
    const active = (btn,id)=>{
        btn.classList.toggle("active")

        if(btn.classList.contains("active")){
            btn.children[0].style.opacity = "1"
            list.push(id)  
        }else{
            btn.children[0].style.opacity = "0"
            list.splice(list.indexOf(id), 1)
        }
        navigate(`?q=${list}&p=${currentPage}`)
    }
    return(
        <BannerCategorys>
            <h1>Milhares de filmes para descobrir. Explore já.</h1>
            <p>Filtre por :</p>
            <div className="container-filter">
                {state.map((category)=>{ return <button onClick={(e)=>{active(e.target,category.id)}} key={category.id}>{category.name}<AiFillCloseCircle size="20"/></button>})}
            </div>
        </BannerCategorys>
    )
}


export default Categorys