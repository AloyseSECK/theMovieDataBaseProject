import styled from "@emotion/styled";

export const Main = styled("div")({})


export const MoviePageDesign = styled("div")({
    padding: "48px",
});

export const Presentation = styled("div")({
    display: "flex",
    alignItems : "end" ,
    gap: "1rem" ,
    "@media (max-width: 650px)": {
        flexDirection: "column",
        alignItems: "center",
    },
});


export const Title = styled("p")({
    fontSize: "36px",
    marginBottom: "1px",
});

export const SubTitle = styled("p")({
    fontSize: "30px",
});

export const DescriptionHeader = styled("p")({
    fontSize: "16px",
    marginTop: "1px",
});

export const DescriptionFooter = styled("em")({
    fontSize: "16px",
    marginTop: "1px",
});

export const PresentationCard = styled("img")({
    width: "300px",
    borderRadius: "0.375rem",
    paddingBottom: "0",
});

export const LeftArrow = (
    <svg 
        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" 
        >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
);