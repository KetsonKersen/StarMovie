import styled from "styled-components"
import { Color } from "../Global/GlobalStyles";

export const Menu = styled.header`
    width: 100%;
    height: 8rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transform: translate(0 , 0);
    .container-toggle{
        width: 100%;
        height: 100%;
        background-color: ${Color.BackgroundDark};
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 0 10%;
        color: ${Color.FontLight};
    }
    
    h1{
        font-size: 5rem;
        cursor: pointer;
    }
    h1 span{
        color: ${Color.Base};

    }

    ul{
        display: flex;
        gap: 5rem;
        align-items: center;
    }
    li{
        cursor: pointer;
    }
    .container-form{
        height: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    form{
        display: flex;
        align-items: center;
        gap: 2rem;
        position: relative;
    }
    form input{
        width: 30rem;
        height: 4rem;
        padding: 1rem 2rem;
        padding-right: 5rem;
        font-size: 1.8rem;
        border-radius: 4rem;
        background-color: #0000002c;
        color: white;
        box-shadow: inset 0 0 10px #00000070;
    }
    form input::placeholder{
        color: #7d7c7c;
    }
    form button{
        width: 4rem;
        height: 4rem;
        color: #7d7c7c;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right:1rem;
    }
    #btn-menu{
        width: 5rem;
        height: 5rem;
        padding-top: .5rem;
        font-size: 5rem;
        position: absolute;
        right: 3rem;
        bottom: 0rem;
        color: white;
        background-color: transparent;
        display: none;
        
    }
   @media (max-width: 1440px){
    h1{
        font-size: 4rem;
    }
    form input{
        width: 22rem;
    }
   }
   @media (max-width: 1280px){
    h1{
        display: none;
    }
    ul{
       gap: 3rem;
    }
    form input{
        width: 22rem;
    }
   }
   @media (max-width: 966px){
    .container-toggle{
        height:15rem;
        flex-direction: column;
        justify-content: center;
    }
    .container-form{
     height: 0;
     margin-top: 5rem;
    }
   }

   @media (max-width: 768px){
       position: absolute;
       .container-toggle{
        padding-top: 10rem;
        flex-direction: column-reverse;
        height: 42rem;
        transform: translate(0 , -100%);
        transition: linear .2s;
    }
    ul{
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }
    ul li{
        width: 100%;
        padding: 2rem 0;
        display: flex;
        justify-content: center;
    }
    .container-form{
        margin-top: 0rem;
        margin-bottom: 5rem;
    }
    #btn-menu{
        display: block;
    }
   }
 
`;