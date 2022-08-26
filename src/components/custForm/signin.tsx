import { Field, Formik } from 'formik';
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';

import { authSelector } from '../../services/SelectorFunctions';
import { ErrorDiv, FlexDiv, Form2, StyledButton } from '../../styles';
import { InputField } from '../inputField';
//login
const LoginValidation = object().shape({
  email: string()
    .required('Valid email required')
    .email('Valid email required'),
  password: string().min(8, 'Required').required('Required')
});

interface Values2 {
  email: string;
  password: string;
}

interface Props2 {
  onSubmit: (values: Values2) => void;
  LoginProps?: {
    email: string;
  };
}

export const CustForm2: FunctionComponent<Props2> = ({
  onSubmit,
  LoginProps
}) => {
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
      initialValues={{
        email: (LoginProps && LoginProps.email) || '',
        password: ''
      }}
      onSubmit={(values) => {
        onSubmit(values);
        setLoading(true);
      }}
      validationSchema={LoginValidation}>
      {({ values }) => (
        <Form2>
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
          {error && (
            <ErrorDiv>either the email or the password is wrong</ErrorDiv>
          )}
          <StyledButton disabled={loading} variant="contained" type="submit">
            {!loading ? (
              'Login'
            ) : (
              <>
                <img height={'10px'} src="assets/icons/Rolling.svg" alt="" />
                Loading
              </>
            )}
          </StyledButton>
          <FlexDiv>
            <Link to="_blank">Forgot Password</Link>
          </FlexDiv>
          <FlexDiv>
            Don't have an account? <Link to="/signup">Signup</Link>
          </FlexDiv>
        </Form2>
      )}
    </Formik>
  );
};
