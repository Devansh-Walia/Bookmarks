import {FunctionComponent} from "react";
import { FieldProps } from "formik";
import { TextField, TextFieldProps } from "@mui/material";


export const inputField: FunctionComponent<FieldProps & TextFieldProps> = ({
  placeholder,
  field
}) => {
  return <TextField placeholder={placeholder} {...field} />;
};
