import styled from "styled-components";
import {Color} from "../GlobalStyles"

export const Card = styled.div`
    width: 28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
    cursor: pointer;
    border-radius: 1rem;
    transition: linear .2s;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.6);
    
    .ContainerImgCard{
        width: 100%;
        min-height: 40rem;
        background-size:cover;
        background-position:center;
        background-repeat: no-repeat;
        transition: linear .2s;
    }
    :hover .ContainerImgCard{
        transform: scale(110%);
    }
    .ContainerInf{
        width: 100%;
        height: 10rem;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        z-index: 1;
        background-color: ${Color.BackgroundDark};
        color:white;
        font-size: 1.6rem;
    }
    :hover .ContainerInf{
        background-color: ${Color.SecondBackgroundDark};
    }
    .ContainerInf > h1{
        font-size: 2rem;
    }
    @media (max-width: 1280px){
        width: 22rem;
    }
    @media (max-width: 1070px){
        width: 20rem;
    }
    @media (max-width: 966px){
        width: 20rem;
    }
    @media (max-width: 768px){
        width: 100%;
        display: block;
        .ContainerImgCard{
            height: 70rem;
            background-size: cover;
        }
    }
`;