import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CustForm } from '../components';
import AuthContainer from '../containers/AuthContainer';
import { useSignin } from '../redux/hooks/AuthHooks';
import { IRootState } from '../redux/reducers';
import { getDataFromLocalStorage } from '../services';
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox, Saly } from '../styles';

type Props = {};

interface onSubmitValues {
    Name: string;
    email: string;
    password: string;
}

const Signin: FunctionComponent<Props> = (props) => {
    const [signingIn] = useSignin();

    const onSubmit = ({ Name, email, password }: onSubmitValues) => {
        signingIn({ userName: Name, email: email, password: password });
    };
    const auth = useSelector((state: IRootState) => state.auth);
    if (getDataFromLocalStorage({ key: '@CanLogin' })) {
        console.log(auth);

        return <Navigate replace to="/" />;
    }
    return (
        <AuthContainer>
            <CustomBox>
                <WelcomeMessage>
                    <Headding>Welcome,</Headding>
                    <HeaddingBold>Get Started</HeaddingBold>
                </WelcomeMessage>
                <Saly src={'assets/images/Saly.png'} alt="saly" />
            </CustomBox>
            <CustomBoxWhiteSmall>
                <CustForm onSubmit={onSubmit} />
            </CustomBoxWhiteSmall>
        </AuthContainer>
    );
};

export { Signin };
