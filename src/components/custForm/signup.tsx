import { Checkbox } from '@mui/material';
import { Field, Formik } from 'formik';
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';

import { authSelector } from '../../services/SelectorFunctions';
import {
  ErrorDiv,
  FlexDiv,
  Form2,
  GoogleIcon,
  SigninWithGoogle,
  StyledButton
} from '../../styles';
import { InputField } from '../inputField';

const RegisterValidation = object().shape({
  Name: string().required('Required'),
  email: string()
    .required('Valid email required')
    .email('Valid email required'),
  password: string().min(8, 'min length of 8 is required').required('Required')
});

interface Values {
  Name: string;
  email: string;
  password: string;
  checked: boolean;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const CustForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth.error) {
      setError(auth.error);
      setLoading(false);
    }
    return () => setError(false);
  }, [auth.error]);

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <Formik
      initialValues={{ Name: '', email: '', password: '', checked: false }}
      onSubmit={(values) => {
        onSubmit(values);
        setLoading(true);
      }}
      validationSchema={RegisterValidation}>
      {({ values }) => (
        <Form2>
          <Field
            required={true}
            name="Name"
            placeholder="Name"
            component={InputField}
          />
          <Field
            name="email"
            placeholder="Email"
            type="email"
            required={true}
            component={InputField}
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            required={true}
            component={InputField}
          />
          <FlexDiv>
            <Field
              name="checked"
              type="checkbox"
              required={true}
              component={Checkbox}
            />
            By signing in, you agree to the{' '}
            <Link to="#">Terms of service and Privacy policy</Link>
          </FlexDiv>
          {error && (
            <ErrorDiv>
              user Already Exists, please try another email id
            </ErrorDiv>
          )}
          <StyledButton disabled={loading} variant="contained" type="submit">
            {!loading ? (
              'Sign Up'
            ) : (
              <>
                <img height={'10px'} src="assets/icons/Rolling.svg" alt="" />
                Loading
              </>
            )}
          </StyledButton>
          Or
          <SigninWithGoogle variant="outlined">
            <GoogleIcon src={'/assets/icons/google.png'} /> Sign Up With Google
          </SigninWithGoogle>
          <FlexDiv>
            Already have an account? <Link to="/login">Login</Link>
          </FlexDiv>
        </Form2>
      )}
    </Formik>
  );
};
