import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)({
  width: '350px',
  height: '50px',
  borderRadius: '16px',
  marginTop: '40px'
});

export const SigninWithGoogle = styled(Button)({
  backgroundColor: 'white',
  width: '30vw',
  color: 'black',
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  border: 1,
  borderWidth: 1,
  borderColor: '#eee'
});

export const StyledButton2 = styled(Button)({
  color: 'grey',
  width: 'inherit'
});

export const StyledButtonGiant = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: '90%',
  height: 100,
  borderRadius: 16,
  borderWidth: 2
}));

export const AddLinkStyle = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderRadius: 16,
  borderWidth: 2,
  height: 50
}));

export const FormButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: 'white',
  borderRadius: 16,
  width: 100
}));

export const ModalButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  borderRadius: 16,
  padding: 12,
  flex: 1
}));

interface toggleProps {
  checked?: boolean;
}

export const ToggleButton = styled(Button)<toggleProps>(
  ({ theme, checked }) => ({
    backgroundColor: !checked ? theme.palette.primary.main : '#dbd4d4',
    padding: 5,
    minWidth: 0,
    height: checked ? 38 : 37,
    width: checked ? 38 : 50,
    borderRadius: 16,
    '&:hover': {
      backgroundColor: !checked ? theme.palette.primary.main : '#dbd4d4'
    }
  })
);
