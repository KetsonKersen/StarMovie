import {Menu} from "./style"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"



const Header = ()=>{
    const navigate = useNavigate()
    const [state,setState] = useState("")
    const [MenuState,SetMenuState] = useState(false)

    const ConstructorCary = (e)=>{
        e.preventDefault()
        if(!state) return 

        navigate(`/Search?q=${state}`)
        setState("")
    }
    const Togglemenu = () =>{
        const container = document.querySelector(".container-toggle")
        MenuState ? container.style.transform = "translate(0 , -100%)" : container.style.transform = "translate(0 , 0%)" 
        const li = document.querySelectorAll("header ul li")
        li.forEach((link)=>{
            link.addEventListener("click",()=>{
                SetMenuState(false)
                container.style.transform = "translate(0 , -100%)"
            })
        })
        SetMenuState(!MenuState)
    }
    
    return(
        <Menu>
            <div className="container-toggle">
                <h1><Link to="/">Star<span>Movie</span></Link></h1>
                <ul>
                    <li><Link to="/">Populares</Link></li>
                    <li><Link to="/TopRated">Mais bem avaliados</Link></li>
                    <li><Link to="/NowPlaying">Em cartaz</Link></li>
                    <li><Link to="/Upcoming">Ultimos lançamentos</Link></li>
                </ul>
                <div className="container-form">
                    <form onSubmit={ConstructorCary}>
                        <input type="text" placeholder="Busque um filme" value={state} onChange={(e)=>setState(e.target.value)}/>
                        <button type="submit"><AiOutlineSearch size="30"/></button>
                    </form>
                </div>
            </div>
            <button id="btn-menu" onClick={()=>Togglemenu()}>{MenuState ? <AiOutlineClose/> :<BiMenu/>}</button>
        </Menu>
    )
}
export default Header