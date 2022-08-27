import { styled } from ".";

export const StyledDefaultContainer = styled("div", {
    padding: "0 24px",
    "@md": {
        padding: "0 32px"
    },
    "@lg": {
        padding: "0 64px"
    },
    "@xl": {
        padding: "0 64px"
    }
});
