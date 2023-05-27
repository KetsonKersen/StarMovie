import styled from "styled-components";
import Banner from "../../assets/BannerCategory.jpg"


export const BannerCategorys = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:  4em;
    padding: 5rem 15%;
    background-image: url(${Banner});
    background-position: 100% 70%;
    background-size: 100% auto;
    position: relative;
    color: white;
    h1{
        font-size: 4rem;
        z-index: 2;
        font-weight: 400;
    }
    p{  
        font-size: 2rem;
        z-index: 2;
    }
    .container-filter{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    :before{
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 0;
        left: 0;
    }
    button{
        padding: .8rem 3rem;
        font-size: 2rem;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        position : relative;
        transition: linear .2s;
    }
    button:hover{
        transform: scale(110%);
    }
    button > :nth-child(1){
        position: absolute;
        top: -.5rem;
        right: -.8rem;
        opacity: 0;
    }
    button.active{
        background-color: rgba(255, 1, 1, 0.7);
        z-index: 3;
    }
    @media (max-width: 1280px){
        gap: 2rem;
        text-align: center;
        h1{
            font-size: 3rem;
        }
        .container-filter button {
            font-size: 1.6rem;
        }
    }
    @media (max-width: 966px){
        margin-top: 7rem;
        background-size: cover;
    }
    @media (max-width: 768px){
        background-position: 0 0;
        margin-top: 0rem;
        padding: 2rem;
        padding-top: 12rem;
        text-align: center;
        gap: 2rem;
        h1{
            font-size: 3rem;
        }
   }

`;