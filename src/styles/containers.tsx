import { Box, styled } from "@mui/material";

export const CustomBoxBlue = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDriection: 'row'
}));
export const CustomBoxWhite = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
}));
export const CustomBoxWhiteSmall = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "60vw",
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center'
}));

export const CustomBox = styled(Box)({
    display: 'flex',
    width: '40vw',
    flexDirection: 'column'
})

export const FlexDiv = styled('div')({
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 5,
    padding: 10
})