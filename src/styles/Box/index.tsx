import { styled, Box } from '@mui/material';

export const WelcomeMessage = styled(Box)({
  position: 'absolute',
  top: '4rem',
  left: '4rem'
});

export const LeftPane = styled(Box)({
  minHeight: '100vh',
  height: '100vh',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  zIndex: 3,
  boxShadow: '12px 0px 15px -11px rgb(158 141 158)'
});

export const FoldersDiv = styled(Box)({
  height: '80%',
  width: '90%',
  marginLeft: 20,
  overflowY: 'scroll',
  overflowX: 'auto',
  scrollbarWidth: 'thin',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 10,
  '&::-webkit-scrollbar': {
    width: '0px',
    height: '1px'
  },
  '&::-webkit-scrollbar-track': {
    webkitBoxShadow: 'inset 0 0 1px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.03)',
    outline: '1px solid slategrey',
    borderRadius: 50
  }
});

export const MiddleBar = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
  alignItems: 'center'
});

export const Toggle = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '30px',
  marginTop: 10
}));

export const MiddleText = styled('div')({
  display: 'grid',
  gridTemplateColumns: '90% 10%',
  textAlign: 'left',
  gap: '20px'
});
export const LowerText = styled('div')({
  textAlign: 'left',
  paddingRight: 80,
  paddingLeft: 25,
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 19,
  alignItems: 'center',
  color: '#9D9B9F'
});
export const MainContainer = styled(Box)({
  padding: 20,
  flex: 3,
  marginLeft: 20,
  overflowY: 'scroll',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: '0.2em'
  },
  '&::-webkit-scrollbar-track': {
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey',
    borderRadius: 50
  }
});
export const Cards = styled(Box)({
  flex: 2,
  padding: 10,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 30,
  alignItems: 'center',
  justifyContent: 'flex-start'
});
export const CardContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: 258,
  height: 321,
  padding: 20,

  background: '#FFFFFF',
  boxShadow:
    '0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)',
  borderRadius: 20
});

export const ContainerCheckbox = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: 'inherit',
  position: 'absolute',
  zIndex: 1
});
export const ProfileContainer = styled('div')({
  height: 50,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 20
});
export const Profile = styled('div')({
  display: 'flex',
  gap: 10,
  height: 45,
  padding: 2
});

export const NoBookmarks = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '1px',
  margin: 'auto',
  marginTop: '5%'
});

export const MiddleBarLeftDiv = styled('div')({ display: 'flex', gap: 40 });
export const InnerFolderContainer = styled(Box)({ marginLeft: 30 });
export const Div = styled('div')({
  width: 'fit-content',
  padding: 7
});

export const FolderButtonsAndMenuDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
});
