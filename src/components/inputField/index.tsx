import { TextFieldProps } from "@mui/material";
import { FieldProps } from "formik";
import { FunctionComponent } from "react";
import { ErrorMessageCust, InputFieldRounded } from "../../styles";

export const inputField: FunctionComponent<FieldProps & TextFieldProps> = ({
  placeholder,
  field
}) => {
  return <>
    <InputFieldRounded placeholder={placeholder} {...field} />
    <ErrorMessageCust
      name={field.name}
      component="div"
    />
  </>;
};
