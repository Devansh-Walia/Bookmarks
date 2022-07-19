import { styled, Box } from '@mui/material';

export const WelcomeMessage = styled(Box)({
    position: 'absolute',
    top: '4rem',
    left: '4rem',
})


export const LeftPane = styled(Box)({
    height: '100vh',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    zIndex: 3,
    boxShadow: '12px 0px 15px -11px rgb(158 141 158)',
})

export const FolderDiv = styled(Box)({
    height: '80%',
    width: '100%',
    padding: 10
})
