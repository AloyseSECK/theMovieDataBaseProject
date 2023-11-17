import styled from "@emotion/styled";

export const MoviePageDesign = styled.div`
    padding : 48px ; 
`;


export const Presentation = styled.div`
    display: flex;
    align-items: end;
    gap: 1rem ; 
`;

export const Title = styled.p`
    font-size: 36px;
    margin-bottom: 1px
`;
export const SubTitle = styled.p`
    font-size: 30px;
`;

export const DescriptionHeader = styled.p`
    font-size: 16px;
    margin-top: 1px
`;

export const DescriptionFooter = styled.em`
    font-size: 16px;
    margin-top: 1px ;
`;

export const PresentationCard = styled("img")`
    width: 300px ; 
    border-radius: 0.375rem ; 
    padding-bottom: 0 ; 
`; 

export const Credits = styled.div``;
export const ActorCard = styled.div``;
export const ActorsList = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 1vw;
`;
export const ActorImage = styled.img`
    border-radius: 0.375rem;
    width: 200px ; // Normalement on a max-width: 100% et height: auto 
`;
export const ActorInfo = styled.p`
    margin: 0px ; 
`;
export const Images = styled.div``;
export const ImagesList = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 1vw;
`;
export const ImageCard = styled.img`
    border-radius: 0.375rem;
    width: 1000px ; // Normalement on a max-width: 100% et height: auto 
`;