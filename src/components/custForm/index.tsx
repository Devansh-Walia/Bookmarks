import { Checkbox, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';
import { BookMarkFormStyled, ErrorDiv, FlexDiv, FlexDiv2, Form2, FormButton, GoogleIcon, ModalButton, SigninWithGoogle, StyledButton } from '../../styles';
import { inputField, inputFieldAddForm } from '../inputField';

const RegisterValidation = object().shape({
    Name: string().required('Required'),
    email: string().required('Valid email required').email('Valid email required'),
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

//login
const LoginValidation = object().shape({
    email: string().required('Valid email required').email('Valid email required'),
    password: string().min(8, 'Required').required('Required')
});

interface Values2 {
    email: string;
    password: string;
}
interface Props2 {
    onSubmit: (values: Values2) => void;
}

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

export const CustForm: FunctionComponent<Props> = ({ onSubmit }) => {
    const [error, seterror] = useState(false);
    if (error) {
        setTimeout(() => {
            seterror(false);
        }, 2000);
    }
    return (
        <Formik
            initialValues={{ Name: '', email: '', password: '', checked: false }}
            onSubmit={(values) => {
                onSubmit(values);
            }}
            validationSchema={RegisterValidation}
        >
            {({ values }) => (
                <Form2>
                    <Field required={true} name="Name" placeholder="Name" component={inputField} />
                    <Field name="email" placeholder="Email" type="email" required={true} component={inputField} />
                    <Field name="password" placeholder="Password" type="password" required={true} component={inputField} />
                    <FlexDiv>
                        <Field name="checked" type="checkbox" required={true} component={Checkbox} />
                        By signing in, you agree to the <Link to="#">Terms of service and Privacy policy</Link>
                    </FlexDiv>
                    {error && <ErrorDiv>user Already Exists, please try another email id</ErrorDiv>}
                    <StyledButton variant="contained" type="submit">
                        Submit
                    </StyledButton>
                    Or
                    <SigninWithGoogle variant="outlined">
                        <GoogleIcon src={'assets/icons/google.png'} /> Sign Up With Google
                    </SigninWithGoogle>
                    <FlexDiv>
                        Already have an account? <Link to="/login">Login</Link>
                    </FlexDiv>
                </Form2>
            )}
        </Formik>
    );
};

export const CustForm2: FunctionComponent<Props2> = ({ onSubmit }) => {
    const [error, seterror] = useState(false);
    if (error) {
        setTimeout(() => {
            seterror(false);
        }, 2000);
    }
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
                onSubmit(values);
            }}
            validationSchema={LoginValidation}
        >
            {({ values }) => (
                <Form2>
                    <Field name="email" placeholder="Email" type="email" required={true} component={inputField} />
                    <Field name="password" placeholder="Password" type="password" required={true} component={inputField} />

                    <StyledButton variant="contained" type="submit">
                        Log in
                    </StyledButton>
                    {error && <ErrorDiv>either the email or the password is wrong</ErrorDiv>}
                    <FlexDiv>
                        Don't have an account? <Link to="/signin">Signin</Link>
                    </FlexDiv>
                </Form2>
            )}
        </Formik>
    );
};

export const BookmarkForm: FunctionComponent<BookmarkProps> = ({ onSubmit }) => {
    const [error, seterror] = useState(false);
    if (error) {
        setTimeout(() => {
            seterror(false);
        }, 2000);
    }
    return (
        <Formik
            initialValues={{ url: '', folder: '/' }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
            validationSchema={BookmarkValidation}
        >
            {({ values }) => (
                <BookMarkFormStyled>
                    <Typography sx={{ color: 'white' }} variant="h4">
                        Add Quick Link
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: 10 }}>URL</Typography>
                    <Field name="url" placeholder="URL" type="text" required={true} component={inputFieldAddForm} />
                    <Typography sx={{ color: 'white', fontSize: 10 }}>Folder</Typography>
                    <FlexDiv2>
                        <ModalButton variant="contained">ROOT</ModalButton>
                        <FormButton variant="contained" type="submit">
                            Save
                        </FormButton>
                    </FlexDiv2>
                    {error && <ErrorDiv>user Already Exists, please try another email id</ErrorDiv>}
                </BookMarkFormStyled>
            )}
        </Formik>
    );
};
