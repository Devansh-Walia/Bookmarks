import { Form, Formik, Field } from "formik";
import { FunctionComponent } from "react";
import { Button } from '@mui/material'
import { inputField } from "../inputField";
interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const CustForm: FunctionComponent<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <Field
                            name="firstName"
                            placeholder="first name"
                            component={inputField}
                        />
                    </div>
                    <div>
                        <Field
                            name="lastName"
                            placeholder="last name"
                            component={inputField}
                        />
                    </div>
                    <div>
                        <Field name="email" placeholder="email" component={inputField} />
                    </div>
                    <Button variant="contained" type="submit">submit</Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};