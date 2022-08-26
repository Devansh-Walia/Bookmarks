import { Checkbox, Input, styled, TextField } from '@mui/material';
import { ErrorMessage } from 'formik';

export const InputFieldRounded = styled(Input)`
  width: 350px;
  height: 50px;
  border: 1px solid #f1f1fa;
  border-radius: 12px;
  padding-left: 20px;
  color: #91919f;
  margin-top: 40px;
`;

export const InputFieldWhite = styled(TextField)(({ theme }) => ({
  margin: 5,
  backgroundColor: theme.palette.primary.dark,
  width: 'inherit',
  color: 'white',
  border: 'none',
  padding: 10,
  '& input': {
    color: 'white'
  },
  borderRadius: 20,
  '& .MuiOutlinedInput-root': {
    borderRadius: 20
  }
}));

export const ErrorMessageCust = styled(ErrorMessage)({
  color: 'red',
  fontSize: 10
});

interface StyledSearchProps {
  width: string;
  bgcolor: string;
}

export const StyledTextField = styled(TextField)<StyledSearchProps>(
  (props) => ({
    width: props.width,
    backgroundColor: props.bgcolor,
    margin: 5,
    borderRadius: 20,
    '& .MuiOutlinedInput-root': {
      borderRadius: 20
    }
  })
);

export const CheckedIcon = styled(Checkbox)(({ theme }) => ({
  borderRadius: 20,
  width: 16,
  height: 16,
  'input:hover ~ &': {
    backgroundColor: '#30404d'
  }
}));
