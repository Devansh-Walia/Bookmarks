import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { CustForm2 } from '../components';
import AuthContainer from '../containers/AuthContainer';
import { useLogin } from '../redux/hooks/AuthHooks';
import { getDataFromLocalStorage } from '../services';
import { authSelector } from '../services/SelectorFunctions';
import {
  WelcomeMessage,
  Headding,
  HeaddingBold,
  CustomBoxWhiteSmall,
  CustomBox,
  Saly
} from '../styles';

interface onSubmitValues {
  email: string;
  password: string;
}

const Login: FunctionComponent = () => {
  const [login] = useLogin();
  const navigate = useNavigate();
  const auth = useSelector(authSelector);
  const onSubmit = ({ email, password }: onSubmitValues) => {
    login({ email, password, navigate });
  };

  if (auth.isLoggedIn || getDataFromLocalStorage({ key: '@authToken' }))
    return <Navigate replace to="/dash" />;

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
        <CustForm2 onSubmit={onSubmit} LoginProps={auth.LoginProps} />
      </CustomBoxWhiteSmall>
    </AuthContainer>
  );
};

export { Login };
