import { styled, Typography } from '@mui/material';

export const Headding = styled(Typography)({
    fontSize: 40,
    fontWeight: 400,
    lineHeight: '51px',
    letterSpacing: ' 0.03em',
    color: '#FFFFFF',
    display: 'block'
});

export const HeaddingBold = styled(Typography)({
    fontSize: 40,
    fontWeight: 600,
    lineHeight: '51px',
    letterSpacing: ' 0.03em',
    color: '#FFFFFF',
    display: 'block'
});

export const LogoTitle = styled(Typography)({
    fonFamily: 'Inter',
    fontSize: '23px',
    fontWeight: 700,
    lineHeight: '27px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginLeft: 10
});

export const TitleCardText = styled(Typography)({
    fontSize: '23px',
    fontWeight: 700,
    lineHeight: '27px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginLeft: 10,
    minWidth: 140,
    maxWidth: 150
});
