import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustForm2 } from '../components';
import AuthContainer from '../containers/AuthContainer';
import { useLogin } from '../redux/hooks/AuthHooks';
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
  const onSubmit = ({ email, password }: onSubmitValues) => {
    login({ email, password, navigate });
  };
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
