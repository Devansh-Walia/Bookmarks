import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CustForm2 } from '../components';
import AuthContainer from '../containers/AuthContainer';
import { useLogin } from '../redux/hooks/AuthHooks';
import { IRootState } from '../redux/reducers';
import { getDataFromLocalStorage } from '../services';
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox, Saly } from '../styles';

type Props = {};

interface onSubmitValues {
    email: string;
    password: string;
}

const Login: FunctionComponent<Props> = (props) => {
    const [loggingIn] = useLogin();
    const onSubmit = ({ email, password }: onSubmitValues) => {
        loggingIn({ email, password });
    };
    const auth = useSelector((state: IRootState) => state.auth);
    if (auth.isLoggedin && getDataFromLocalStorage({ key: '@authToken' })) {
        return <Navigate replace to="/" />;
    }
    return (
        <AuthContainer>
            <CustomBox>
                <WelcomeMessage>
                    <Headding>Welcome,</Headding>
                    <HeaddingBold>Get Started</HeaddingBold>
                </WelcomeMessage>
                <Saly src={'/assets/images/Saly.png'} alt="saly" />
            </CustomBox>
            <CustomBoxWhiteSmall>
                <CustForm2 onSubmit={onSubmit} />
            </CustomBoxWhiteSmall>
        </AuthContainer>
    );
};

export { Login };
