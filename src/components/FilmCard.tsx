import styled from "@emotion/styled";


// export const FilmCard = styled("img")({
//     width: "261.6px" , 
//     // height: "auto",
//     borderRadius: "0.375rem"
    
// });

export const FilmCard = styled("img")`
    width: 261.6px ; 
    border-radius: 0.375rem ; 
    cursor: pointer;
    transition: transform 0.3s;
  
    &:hover {
      transform: scale(1.1);
    }
`

// export const FilmCard = styled("div")({
//     borderRadius: "1em",
//     width: "450px",
//     height: "auto",
// })