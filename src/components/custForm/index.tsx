import { Checkbox, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';

import {
  authSelector,
  bookmarkSelector
} from '../../services/SelectorFunctions';
import {
  BookMarkFormStyled,
  ErrorDiv,
  FlexDiv,
  FlexDiv2,
  Form2,
  FormButton,
  GoogleIcon,
  ModalButton,
  SigninWithGoogle,
  StyledButton
} from '../../styles';
import { inputField, inputFieldAddForm } from '../inputField';

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
            component={inputField}
          />
          <Field
            name="email"
            placeholder="Email"
            type="email"
            required={true}
            component={inputField}
          />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            required={true}
            component={inputField}
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
}

export const CustForm2: FunctionComponent<Props2> = ({ onSubmit }) => {
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
      initialValues={{ email: '', password: '' }}
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
            component={inputField}
          />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            required={true}
            component={inputField}
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

//bookmark
const BookmarkValidation = object().shape({
  url: string().required('Valid email required')
});
interface BookmarkValues {
  url: string;
  folder: string;
}
interface BookmarkProps {
  onSubmit: (values: BookmarkValues) => void;
}
export const BookmarkForm: FunctionComponent<BookmarkProps> = ({
  onSubmit
}) => {
  const [error, setError] = useState(false);
  const bookmark = useSelector(bookmarkSelector);

  useEffect(() => {
    if (bookmark.error) {
      setError(bookmark.error);
    }
    return () => setError(false);
  }, [bookmark.error]);

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <Formik
      initialValues={{ url: '', folder: '/' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validationSchema={BookmarkValidation}>
      {({ values }) => (
        <BookMarkFormStyled>
          <Typography sx={{ color: 'white' }} variant="h4">
            Add Quick Link
          </Typography>
          <Typography sx={{ color: 'white', fontSize: 10 }}>URL</Typography>
          <Field
            name="url"
            placeholder="URL"
            type="text"
            required={true}
            component={inputFieldAddForm}
          />
          <Typography sx={{ color: 'white', fontSize: 10 }}>Folder</Typography>
          <FlexDiv2>
            <ModalButton variant="contained">ROOT</ModalButton>
            <FormButton variant="contained" type="submit">
              Save
            </FormButton>
          </FlexDiv2>
          {error && <ErrorDiv>invalid link</ErrorDiv>}
        </BookMarkFormStyled>
      )}
    </Formik>
  );
};
