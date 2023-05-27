import styled from "styled-components";

export const PaginationStyled = styled.div`
    display: flex;
    justify-content:center;

    ul{
        display: flex;
        gap: 2rem;
    }
    ul li a{
        color: black;
        background-color: #fffcfc;
        padding: 1rem;
    }
    ul li{
        cursor: pointer;
        display: flex;
        border-radius: 1rem;
        font-size: 1.8rem;
    }
    .selected a{
        background-color: #3015e1;
        color: white;
        font-weight: 900;
        transform: scale(130%)
    }
    @media (max-width: 768px){
        ul{
            justify-content: space-between;
            gap: 1rem;
        }
        ul li a{
           font-size: 1.8rem;
        }
    }
`;
