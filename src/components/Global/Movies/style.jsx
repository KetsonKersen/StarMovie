import styled from "styled-components";
import {Color} from "../GlobalStyles"

export const ContainerMoviePage = styled.section`
    width: 100%;
    min-height: calc(100vh - 35.8rem);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5rem 1rem;

    h1{
        color: ${Color.FontLight};
    }
    @media (max-width: 1070px){
        gap: 1rem;
    }
    @media (max-width: 966px){
        justify-content: space-between;
    }
    @media (max-width: 768px){
        display: flex;
        flex-direction: column ;
    }
`;
