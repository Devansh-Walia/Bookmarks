import { FunctionComponent } from "react";
import { FieldProps } from "formik";
import { TextFieldProps } from "@mui/material";
import { InputFieldRounded, ErrorMessageCust } from "../../styles";

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
