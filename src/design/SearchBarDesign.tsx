import styled from "@emotion/styled";

export const SearchBarDesign = styled("input")`
    border : none ;
    background: #374151; 
    border-radius: 5em ; 
    width : 23vw ;
    padding : 16px ;  
    font-size : 16px ;
    height: 1% ;
    margin-top: auto;
    margin-bottom: auto; 
    margin-right: 2em;
    

    @media (max-width: 585px) {
        width: 80%;
        margin-right: 0;
        align-self: center;
        margin-bottom: 1em;
        margin-top: 1em;
    }
`;

export const SearchBarDiv = styled("div")`
    padding-top: 30px;
    @media (max-width: 585px) {
        padding-top: 0px;
    }
`;