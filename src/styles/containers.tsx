import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const CustomBoxBlue = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.primary.main
}));
export const CustomBoxWhite = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
}));