import { BrowserRouter , Routes , Route } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home";
import NowPLaying from "../../Pages/NowPlaying";
import Search from "../../Pages/Search";
import TopRated from "../../Pages/TopRated";
import Upcoming from "../../Pages/Upcoming";
import Movie from "../../Pages/Movie/Movie";

export const MainPages = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}> 
                    <Route path="/" element={<Home/>}/>
                    <Route path="/NowPLaying" element={<NowPLaying/>}/>
                    <Route path="/Search" element={<Search/>}/>
                    <Route path="/TopRated" element={<TopRated/>}/>
                    <Route path="/Upcoming" element={<Upcoming/>}/>
                    <Route path="/Movie" element={<Movie/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
