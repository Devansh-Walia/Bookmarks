
import { styled, TextField } from "@mui/material";
import { ErrorMessage } from "formik";

export const InputFieldRounded = styled(TextField)({
    borderRadius: '20px',
    margin: 5,
    width: '30vw'
})
export const InputFieldWhite = styled(TextField)(({ theme }) => ({
    borderRadius: '10px',
    margin: 5,
    backgroundColor: theme.palette.primary.dark,
    width: 'inherit',
    color: 'white',
    border: 'none',
    padding: 10,
    '&:input': {
        color: 'white'
    }
}))

export const ErrorMessageCust = styled(ErrorMessage)({
    color: 'red',
    fontSize: 10
})


interface StyledSearchProps {
    width: string;
    bgcolor: string;
}
export const StyledTextField = styled(TextField)<StyledSearchProps>((props) => ({
    width: props.width,
    backgroundColor: props.bgcolor,
    margin: 10,
}))
