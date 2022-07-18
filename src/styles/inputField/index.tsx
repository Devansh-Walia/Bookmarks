
import { TextField, styled } from "@mui/material";
import { ErrorMessage } from "formik";

export const InputFieldRounded = styled(TextField)({
    borderRadius: '20px',
    margin: 5,
    width: '30vw'
})

export const ErrorMessageCust = styled(ErrorMessage)({
    color: 'red',
    fontSize: 10
})