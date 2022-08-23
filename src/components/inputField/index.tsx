import { TextFieldProps } from '@mui/material';
import { FieldProps } from 'formik';
import { FunctionComponent } from 'react';

import {
  ErrorMessageCust,
  InputFieldRounded,
  InputFieldWhite
} from '../../styles';

export const inputField: FunctionComponent<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
  type
}) => {
  return (
    <>
      <InputFieldRounded
        placeholder={placeholder}
        {...field}
        type={type}
        disableUnderline
        required
      />
      <ErrorMessageCust name={field.name} component="div" />
    </>
  );
};

export const inputFieldAddForm: FunctionComponent<
  FieldProps & TextFieldProps
> = ({ placeholder, field }) => {
  return (
    <>
      <InputFieldWhite
        placeholder={placeholder}
        {...field}
        variant="standard"
        InputProps={{
          disableUnderline: true
        }}
      />
      <ErrorMessageCust name={field.name} component="div" />
    </>
  );
};
