import styled from "@emotion/styled";

export const Images = styled("div")({});

export const ImagesList = styled("div")({
    display: "flex",
    overflowX: "auto",
    gap: "1vw",
});

export const ImageCard = styled("img")({
    borderRadius: "0.375rem",
    maxWidth: "1200px",
    "@media (max-width: 820px)": {
        maxWidth: "600px",
    },
    "@media (max-width: 585px)": {
        maxWidth: "200px",
    },
});

export const Credits = styled("div")({});