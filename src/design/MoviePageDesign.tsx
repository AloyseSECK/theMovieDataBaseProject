import styled from "@emotion/styled";

export const Main = styled("div")({})


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

export const LeftArrow = (
    <svg 
        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" 
        style={{ fill: 'white', justifyContent: 'center'}}>
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
);