import styled from "@emotion/styled";

export const HomeDesign = styled("div")({
    display: "flex",
    flex: "1",
    flexDirection: "column",
    gap: "5px",
    marginTop : "auto",
    fontSize: "2.25rem",
    lineHeight: "2rem",
    marginLeft: "auto",

    "@media (max-width: 444px)": {
        fontSize: "1.5rem",
    },
});
    