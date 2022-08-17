import { Box, styled } from '@mui/material';

export const CustomBoxBlue = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flex: 1,
    flexDriection: 'row'
}));
export const CustomBoxBlueSmall = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flex: 1,
    flexDriection: 'column',
    borderRadius: 10
}));
export const CustomBoxWhite = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100vw'
}));
export const CustomBoxWhiteSmall = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '60vw',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center'
}));

export const CustomBox = styled(Box)({
    display: 'flex',
    width: '40vw',
    flexDirection: 'column'
});

export const FlexDiv = styled('div')({
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 5,
    padding: 10
});

export const FlexDiv2 = styled('div')({
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    display: 'flex',
    gap: 50
});

export const DashContainer = styled(Box)({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    overflow: 'hidden',
    height: '100vh',
    width: '100vw'
});
