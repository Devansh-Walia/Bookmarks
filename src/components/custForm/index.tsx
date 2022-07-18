import { Formik, Field } from "formik";
import { FunctionComponent } from "react";
import { Checkbox } from '@mui/material'
import { inputField } from "../inputField";
import { Link } from "react-router-dom";
import { GoogleIcon, SigninWithGoogle, StyledButton, FlexDiv, Form2 } from "../../styles";
import { object, string, boolean } from "yup";

const RegisterValidation = object().shape({
    name: string().required("Required"),
    email: string()
        .required("Valid email required")
        .email("Valid email required"),
    password: string().min(8, "Required").required("Required"),
    checked: boolean().oneOf([true]).required()
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
    return (
        <Formik
            initialValues={{ Name: "", email: "", password: "", checked: false }}
            onSubmit={values => {
                onSubmit(values);
            }}
            validationSchema={RegisterValidation}
        >
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
                        component={inputField} />
                    <FlexDiv>
                        <Field name="checked" type="checkbox" required={true} component={Checkbox} />
                        By signing in, you agree to the <Link to="#" >Terms of service and Provacy policy</Link>
                    </FlexDiv>
                    <StyledButton variant="contained" type="submit">submit</StyledButton>
                    Or
                    <SigninWithGoogle variant="outlined" > <GoogleIcon src={require('../../assets/icons/google.png')} />  Sign Up With Google</SigninWithGoogle>
                    <FlexDiv>
                        Already have an account? <Link to="/" >Login</Link>
                    </FlexDiv>
                </Form2>
            )}
        </Formik>
    );
};


interface Values2 {
    email: string;
    password: string;
}

interface Props2 {
    onSubmit: (values: Values2) => void;
}


export const CustForm2: FunctionComponent<Props2> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={values => {
                onSubmit(values);
            }}
            validationSchema={RegisterValidation}
        >
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
                        component={inputField} />
                    <StyledButton variant="contained" type="submit">Log in</StyledButton>

                    <FlexDiv>
                        Don't have an account? <Link to="/signin" >Signin</Link>
                    </FlexDiv>
                </Form2>
            )}
        </Formik>
    );
};