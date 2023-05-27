import styled from "styled-components";

export const ContainerBanner = styled.div`
    width: 100%;
    height: 55rem;
    background-size: cover;
    background-position: center;
    padding: 5rem 10%;
    display: flex;
    align-items: center;
    gap: 5rem;
    position: relative;
    ::before{
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba(26, 26, 26, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    h3 {
        font-size: 2rem;
    }
    .container-poster{
        min-width: 25rem;
        width: 30rem;
        height: 100%;
        background-size: cover;
        background-position: center;
        z-index: 2;
        border-radius: 1rem;
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.8);

    }
    .container-inf{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        z-index: 2;
        color: white;
    }
    .container-inf ul{
        display: flex;
        gap: 3.5rem;
    }
    .container-inf ul li{
        list-style: circle;
        font-size: 2rem;
    }
    .container-inf ul li:first-of-type{
        list-style: none;
    }
    .average span{
        background-color: #ff000030;
        padding: 1.5rem;
        font-size: 2rem;
        border-radius: 50%;
        border: .3rem solid red;
        margin-right: 2rem;
    }
    .overview{
        max-width: 90rem;
        display: flex;
        flex-direction: column;
    }
    .companies{
        display: flex;
        flex-direction: column;
        align-items: start;
    
    }
    .companies div{
        display: flex;
        gap: 2rem;
    }
    .container-inf > div{
        display: flex;
        gap: 2rem;
    }
    @media (max-width: 966px){
        padding-top: 12rem;
    }
    @media (max-width: 768px){
        height: 100%;
        flex-direction: column;
        padding:2rem;
        padding-top: 12rem;
        .container-poster{
            height: 50rem;
        }
        .container-inf{
            gap: 2rem;
            h1{
                text-align: center;
            }
            ul{
                justify-content: center;
                flex-wrap: wrap;
            }
            ul li{
                padding: .5rem 2rem;
                background-color: #0000008b;
            }
            ul li:first-of-type{
                list-style: circle;
            }
            h3{
                font-size: 3rem;
            }
        }
        .average{
            margin: 2rem auto;
            display: flex;
        }
        .overview{
            font-size: 2rem;
        }
        .video{
            width: 20rem;
        }
    }
    .movieContainer{
        background-color: red;
    }
`;
export const ContainerVideo = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem; 
    iframe{
        width: calc(100vw - 4rem);
        height: 600px;
    }
    @media (max-width: 768px){
        iframe{
        width: calc(100vw - 4rem);
        height: 40rem;
    }
    }
`;

 
export const Cast = styled.div`
    .containerCast{
        width: calc(100vw - 4rem);
        display: flex;
        gap: 1rem;
        overflow: hidden;
        cursor: grab;
        background-color: #222222;
        border: 1px solid black;
        padding: 2rem;
        margin-bottom: 10rem;
        overflow-x: scroll;
    }
    .cardCast{
        background-color: #545454;
        text-align: center;
    }
    .imgPerson{
        width: 20rem;
        height: 30rem;
        background-position: center;
        background-size: cover;
        margin-bottom: 2rem;
    }
`;